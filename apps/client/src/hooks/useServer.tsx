import type { treaty } from "@elysiajs/eden";
import type { App } from "@starter-kit/server/index";
import type { ReactNode } from "@tanstack/react-router";
import { createContext, useContext } from "react";

type ServerClient = ReturnType<typeof treaty<App>>;

type ServerState = {
  app: ServerClient;
};

const ServerContext = createContext<ServerState | null>(null);

export function useServer() {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error("useServer must be used within a ServerProvider.");
  }

  return context;
}

interface ServerStateProviderProps {
  app: ServerClient;
  children: ReactNode;
}

export function ServerStateProvider({
  app,
  children,
}: ServerStateProviderProps) {
  return (
    <ServerContext.Provider value={{ app }}>{children}</ServerContext.Provider>
  );
}
