"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { useCurrentUserQuery } from "@/hooks/auth";
import { IAPIUser, IAuthAction, IAuthContextType, IAuthState } from "@/types/Login";
import { getInitialState } from "@/utils/tools/token-service";

const initialState: IAuthState = {
  isAuthorized: !!getInitialState("token"),
  token: getInitialState("token") as string | null,
  email: getInitialState("email") as string | null,
  name: getInitialState("name") as string | null,
  role: getInitialState("role") as string | null,
};

export const AuthContext = createContext<IAuthContextType | null>(null);
AuthContext.displayName = "AuthContext";

function authReducer(state: IAuthState, action: IAuthAction): IAuthState {
  switch (action.type) {
    case "SET_AUTHORIZED":
      return {
        ...state,
        isAuthorized: true,
        email: action.userData.email ?? null,
        name: action.userData.name ?? null,
        role: action.userData.role ?? "PARENT",
        userData: action.userData,
      };
    case "SET_UNAUTHORIZED":
      return {
        ...state,
        isAuthorized: false,
        token: null,
        email: null,
        name: null,
        role: null,
        userData: undefined,
      };
    case "UPDATE_USER":
      return { ...state, role: action.userData.role ?? null, userData: action.userData };
    default:
      return state;
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const pathname = usePathname();
  const { data: currentUser, isLoading } = useCurrentUserQuery();

  useEffect(() => {
    if (currentUser?.data) {
      const user = currentUser.data as { id?: string; email?: string; name?: string; role?: string };
      const role = user?.role ?? "PARENT";
      const userData: IAPIUser = {
        id: user?.id ?? "",
        user_id: user?.id,
        role,
        email: user?.email ?? "",
        name: user?.name ?? "",
      };
      dispatch({ type: "SET_AUTHORIZED", userData });
    }
  }, [currentUser?.data]);

  const authorize = (userData: IAPIUser) => dispatch({ type: "SET_AUTHORIZED", userData });
  const unauthorize = () => dispatch({ type: "SET_UNAUTHORIZED" });

  const value = useMemo(
    () => ({ ...state, authorize, unauthorize, isLoading }),
    [state, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
