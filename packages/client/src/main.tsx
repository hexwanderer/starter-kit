import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { SidebarProvider } from "./components/ui/sidebar";
import { treaty } from "@elysiajs/eden";
import type { App } from "@starter-kit/server/index";
import { ServerStateProvider } from "./hooks/useServer";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const client = treaty<App>("localhost:3000");
const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No root element found");

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider>
        <SidebarProvider>
          <QueryClientProvider client={queryClient}>
            <ServerStateProvider app={client}>
              <RouterProvider router={router} />
            </ServerStateProvider>
          </QueryClientProvider>
        </SidebarProvider>
      </ThemeProvider>
    </StrictMode>,
  );
}
