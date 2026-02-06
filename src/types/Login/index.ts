export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface IAuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?: string;
  isVerified?: boolean;
}

export interface IAuthData {
  user: IAuthUser;
  token: string;
}

export interface ILoginResponse {
  message: string;
  data: IAuthData;
}

export interface IAPIUser {
  id: string;
  user_id?: string;
  role?: string;
  email?: string;
  name?: string;
}

export interface IAuthState {
  isAuthorized: boolean;
  token: string | null;
  email: string | null;
  name: string | null;
  role: string | null;
  userData?: IAPIUser;
}

export type IAuthAction =
  | { type: "SET_AUTHORIZED"; userData: IAPIUser }
  | { type: "SET_UNAUTHORIZED" }
  | { type: "UPDATE_USER"; userData: IAPIUser };

export type IAuthContextType = IAuthState & {
  authorize: (userData: IAPIUser) => void;
  unauthorize: () => void;
  isLoading: boolean;
};

export interface IForgotPasswordFormValues {
  email: string;
}

export interface IResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}
