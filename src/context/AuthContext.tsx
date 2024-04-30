// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Axios
import axios from "axios";

// ** Config
import authConfig from "src/configs/auth";

// ** Types

import {
  AuthValuesType,
  LoginParams,
  ErrCallbackType,
  UserDataType,
  SignupParams,
  ForgotParams,
  UpdateParams,
  AddCustomerParams,
  GetCustomerParams,
} from "./types";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  updatePassword: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  addcustomer: () => Promise.resolve(),
  getcustomer: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

let globalToken = '';

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const router = useRouter();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(
        authConfig.storageTokenKeyName
      )!;
      if (storedToken) {
        setLoading(true);
        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken,
            },
          })
          .then(async (response) => {
            setLoading(false);
            setUser({ ...response.data.userData });
          })
          .catch(() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            setUser(null);
            setLoading(false);
            if (
              authConfig.onTokenExpiration === "logout" &&
              !router.pathname.includes("login")
            ) {
              router.replace("/login");
            }
          });
      } else {
        setLoading(false);
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (
    params: LoginParams,
    errorCallback?: ErrCallbackType

  ) => {

    const supabaseToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";

    axios
      .post(authConfig.loginEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })

      .then(async (response) => {
        const signInToken = response.data.signInResponse.data.session.access_token;

        globalToken = signInToken;
        params.rememberMe
          ? window.localStorage.setItem(
            authConfig.storageTokenKeyName,
            response.data.signInResponse.data.session.access_token
          )
          : null;
        const returnUrl = router.query.returnUrl;

        setUser({ ...response.data.signInResponse.data.user });
        params.rememberMe
          ? window.localStorage.setItem(
            "userData",
            JSON.stringify(response.data.signInResponse.data.user)
          )
          : null;

        const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";

        router.replace(redirectURL as string);
      })

      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleSignup = (
    params: SignupParams,
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
    axios
      .post(authConfig.registerEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        const redirectURL = "/pages/auth/verify-email-v1";
        //("Success: ", response.data);
        router.push(redirectURL);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };


  const handleGetCustomer = (
    params: GetCustomerParams,
    errorCallback?: ErrCallbackType
  ) => {
    return axios
      .post(authConfig.getcustomerEndPoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalToken}`,
        },
      })
  };

  //add new custoer
  const handleAddCustomer = (
    params: AddCustomerParams,
    errorCallback?: ErrCallbackType
  ) => {
    return axios
      .post(authConfig.addcustomerEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${globalToken}`,
        },
      })
  };
  // const handleAddCustomer = (
  //   params: AddCustomerParams,
  //   errorCallback?: ErrCallbackType
  // ) => {
  //   const supabaseToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
  //   axios
  //     .post(authConfig.addcustomerEndpoint, params, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${supabaseToken}`,
  //       },
  //     })
  //     .then(async (response) => {
  //       console.log("Success: ", response.data);
  //     })
  //     .catch((err) => {
  //       if (errorCallback) errorCallback(err);
  //     });

  // };
  const handleForgotPassword = (
    params: ForgotParams,
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
    axios
      .post(authConfig.forgotEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        const redirectURL = "/pages/auth/verify-password-v1";
        //("handleForgotPassword: ", response.data);
        router.push(redirectURL);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleUpdatePassword = (
    params: UpdateParams,
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";

    axios
      .post(authConfig.updateEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        setUser({ ...response.data.signInResponse.data.user });
        window.localStorage.setItem(
          "userData",
          JSON.stringify(response.data.signInResponse.data.user)
        );

        router.replace("/verify-password-update");
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem(authConfig.storageTokenKeyName);
    router.push("/login");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
    forgotPassword: handleForgotPassword,
    updatePassword: handleUpdatePassword,
    addcustomer: handleAddCustomer,
    getcustomer: handleGetCustomer,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
