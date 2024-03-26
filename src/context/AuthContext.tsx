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
  GetCallsParams,
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
  getcalls: () => Promise.resolve(),
  getAllCustomers: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

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
        console.log("Success: ", response.data);
        router.push(redirectURL);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleAddCustomer = (
    params: AddCustomerParams,
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken = " eyJhbGciOiJIUzI1NiIsImtpZCI6InFiZHFOR3plbTZ0WXFidXAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExNDA5MDQ2LCJpYXQiOjE3MTE0MDU0NDYsImlzcyI6Imh0dHBzOi8vY2lhcmd5YW5jbG9rYmNyYWdhcncuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjZkMDg5YjMzLTAzODEtNDVkNy1iZmY1LTM4NWZjYzRmNTZiZSIsImVtYWlsIjoia2l2YW5jY2FrbWFrQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzExNDA1NDQ2fV0sInNlc3Npb25faWQiOiI4NzU5N2VmZi0zNzJiLTQ4ZmMtODAwYy0wYjg1N2Q5Mjc1YmEiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.Eevt3uijkqxEW6Fh2qd1atNaMZnR2J7I1NndU3fxeBw";
    axios
      .post(authConfig.addcustomerEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        console.log("Success: ", response.data);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleGetCalls = (
    params: GetCallsParams,
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken =
      "eyJhbGciOiJIUzI1NiIsImtpZCI6InFiZHFOR3plbTZ0WXFidXAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExMjk1MTIyLCJpYXQiOjE3MTEyOTE1MjIsImlzcyI6Imh0dHBzOi8vY2lhcmd5YW5jbG9rYmNyYWdhcncuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjZkMDg5YjMzLTAzODEtNDVkNy1iZmY1LTM4NWZjYzRmNTZiZSIsImVtYWlsIjoia2l2YW5jY2FrbWFrQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzExMjkxNTIyfV0sInNlc3Npb25faWQiOiJlODg3NzdmOS1mNzQ0LTQxNzctODEzOC05NTE2NGU5MDVjYjIiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.u1tCll7_Mc7QswuCvf0_oEn-jjYFF_QnLleP75wvcRk";
    axios
      .post(authConfig.getcallsEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        console.log("Success: ", response.data);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleGetCustomer = (
    params: GetCustomerParams,
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
    axios
      .post(authConfig.getcustomerEndpoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        console.log("Success: ", response.data);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleGetCustomers = (
    params: {},
    errorCallback?: ErrCallbackType
  ) => {
    const supabaseToken = "eyJhbGciOiJIUzI1NiIsImtpZCI6InFiZHFOR3plbTZ0WXFidXAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExNDA5MDQ2LCJpYXQiOjE3MTE0MDU0NDYsImlzcyI6Imh0dHBzOi8vY2lhcmd5YW5jbG9rYmNyYWdhcncuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjZkMDg5YjMzLTAzODEtNDVkNy1iZmY1LTM4NWZjYzRmNTZiZSIsImVtYWlsIjoia2l2YW5jY2FrbWFrQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzExNDA1NDQ2fV0sInNlc3Npb25faWQiOiI4NzU5N2VmZi0zNzJiLTQ4ZmMtODAwYy0wYjg1N2Q5Mjc1YmEiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.Eevt3uijkqxEW6Fh2qd1atNaMZnR2J7I1NndU3fxeBw";
    axios
      .post(authConfig.getAllCustomersEndPoint, params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseToken}`,
        },
      })
      .then(async (response) => {
        console.log("Success: ", response.data);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

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
        console.log("handleForgotPassword: ", response.data);
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

  // const handleUpdatePassword = (params: UpdateParams, errorCallback?: ErrCallbackType) => {
  //   const supabaseToken =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
  //   axios
  //     .post(authConfig.updateEndpoint, params, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${supabaseToken}`,
  //       }
  //     })
  //     .then(response => {
  //       const redirectURL = '/pages/auth/verify-password-update'
  //       console.log('handleUpdatePassword: ', response.data)
  //       router.push(redirectURL);
  //     })
  //     .catch(err => {
  //       if (errorCallback) errorCallback(err)
  //     })
  // }

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
    getcalls: handleGetCalls,
    getAllCustomers: handleGetCustomers,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
