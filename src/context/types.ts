//types
export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type SignupParams = {
  email: string
  password: string
  orgName: string;
} 

export type UpdateParams = {
  password: string
}


export type ForgotParams = {
  email: string
}

export type UserDataType = {
  id: string;
  role: string;
  email: string;
  fullName: string;
  username: string;
  password: string;
  avatar?: string | null;
};

export type AuthValuesType = {
 loading: boolean
  logout: () => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  signup: (params: SignupParams, errorCallback?: ErrCallbackType) => void
  forgot: (params: ForgotParams, errorCallback?: ErrCallbackType) => void
  update: (params: UpdateParams, errorCallback?: ErrCallbackType) => void
}
