import React, { createContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@supabase/supabase-js";
import axios, { AxiosResponse } from "axios";

interface TokenProviderProps {
  children: ReactNode;
}

interface TokenContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  // Function to refresh the access token using a refresh token
  const refreshAccessToken = async (
    refreshToken: string
  ): Promise<string | null> => {
    try {
      const supabase = createClient("url", "api-key");
      const { data, error }: { data: any; error: any } =
        await supabase.auth.refreshSession({ refresh_token: refreshToken });

      if (error) {
        throw error;
      }

      if (data && data.session && data.session.access_token) {
        const accessToken = data.session.access_token;
        return accessToken;
      } else {
        console.error("Access token not found in session data:", data);
        return null;
      }
    } catch (error) {
      console.error("Error refreshing token:", error.message);
      return null;
    }
  };

  // Function to get a new access token
  const getNewToken = async (): Promise<string | null> => {
    try {
      const response: AxiosResponse<{ access_token?: string }> =
        await axios.post(
          "https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signin",
          {
            email: "",
            password: "",
          }
        );

      const accessToken = response.data?.access_token;

      window.location.href = "/previous-page";
      console.log(
        "User signed in successfully. Returning to previous activity..."
      );

      return accessToken || null;
    } catch (error) {
      console.error("Error getting new token:", error.message);
      return null;
    }
  };

  // Synchronize the token
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);

      refreshAccessToken(storedToken).then((newAccessToken) => {
        if (newAccessToken) {
          setToken(newAccessToken);
          localStorage.setItem("token", newAccessToken);
        } else {
          getNewToken().then((newToken) => {
            if (newToken) {
              setToken(newToken);
              localStorage.setItem("token", newToken);
            } else {
              console.error("Failed to get a new token.");
            }
          });
        }
      });
    } else {
      getNewToken().then((newToken) => {
        if (newToken) {
          setToken(newToken);
          localStorage.setItem("token", newToken);
        } else {
          console.error("Failed to get a new token.");
        }
      });
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
