import type { createAuthClient } from "better-auth/client";
import { type ReactNode, createContext, useContext } from "react";

export type AuthClient = ReturnType<typeof createAuthClient>;

export type AuthContextType = {
  authClient: AuthClient;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

interface AuthProviderProps {
  authClient: AuthClient;
  children: ReactNode;
}

export function AuthProvider({ authClient, children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ authClient }}>
      {children}
    </AuthContext.Provider>
  );
}
