import type { treaty } from "@elysiajs/eden";
import type { App } from "@starter-kit/server/index";
import { createContext, forwardRef, useContext } from "react";

type ServerState = {
  app: ReturnType<typeof treaty<App>>;
};

const ServerContext = createContext<ServerState | null>(null);

export function useServer() {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error("useServer must be used within a ServerProvider.");
  }

  return context;
}

export const ServerStateProvider = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    app: ReturnType<typeof treaty<App>>;
  }
>(({ app, ...props }, ref) => {
  return (
    <ServerContext.Provider value={{ app }}>
      <div ref={ref} {...props}>
        {props.children}
      </div>
    </ServerContext.Provider>
  );
});
