import { addCustomer } from '../store/apps/customer/index';
//types
export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type GetCallsParams = {
  call: string
}

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

export type UserParams = {
  name: string
}

export type AddCustomerParams = {
  name: string;
  update: number;
  cancel: number;
}

export type GetCustomerParams = {
  name: string
  entryId: string
  orgId: string 
  id:string

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
  forgotPassword: (params: ForgotParams, errorCallback?: ErrCallbackType) => void
  updatePassword: (params: UpdateParams, errorCallback?: ErrCallbackType) => void
  addcustomer: (params: AddCustomerParams, errorCallback?: ErrCallbackType) => void
  getcustomer: (params: GetCustomerParams, errorCallback?: ErrCallbackType) => void

}