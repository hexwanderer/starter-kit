import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import { treaty } from "@elysiajs/eden";
import type { App } from "@starter-kit/server/index";
import { ServerStateProvider } from "@/hooks/useServer";
import { AuthProvider } from "@/hooks/useAuth";
import { buildProvidersTree } from "@/lib/providersTree";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createAuthClient } from "better-auth/client";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const serverClient = treaty<App>("/api");
const queryClient = new QueryClient();
const authClient = createAuthClient();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No root element found");

const ProviderTree = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  [ServerStateProvider, { serverClient }],
  [AuthProvider, { authClient }],
  [SidebarProvider, {}],
  [ThemeProvider, {}],
]);

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ProviderTree>
        <RouterProvider router={router} />
      </ProviderTree>
    </StrictMode>,
  );
}
