import { createContext, useContext, type ReactNode } from "react";
import type { createAuthClient } from "better-auth/client";

export type AuthClient = ReturnType<typeof createAuthClient>;

type AuthContextType = {
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
