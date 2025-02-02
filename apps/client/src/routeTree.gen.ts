/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as LandingImport } from "./routes/_landing"
import { Route as AuthenticatedImport } from "./routes/_authenticated"
import { Route as LandingIndexImport } from "./routes/_landing/index"
import { Route as AuthSignUpImport } from "./routes/auth/sign-up"
import { Route as AuthSignInImport } from "./routes/auth/sign-in"
import { Route as LandingFeaturesImport } from "./routes/_landing/features"
import { Route as LandingAboutImport } from "./routes/_landing/about"
import { Route as AuthenticatedDashboardImport } from "./routes/_authenticated/dashboard"

// Create/Update Routes

const LandingRoute = LandingImport.update({
  id: "/_landing",
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => rootRoute,
} as any)

const LandingIndexRoute = LandingIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => LandingRoute,
} as any)

const AuthSignUpRoute = AuthSignUpImport.update({
  id: "/auth/sign-up",
  path: "/auth/sign-up",
  getParentRoute: () => rootRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  id: "/auth/sign-in",
  path: "/auth/sign-in",
  getParentRoute: () => rootRoute,
} as any)

const LandingFeaturesRoute = LandingFeaturesImport.update({
  id: "/features",
  path: "/features",
  getParentRoute: () => LandingRoute,
} as any)

const LandingAboutRoute = LandingAboutImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => LandingRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_authenticated": {
      id: "/_authenticated"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    "/_landing": {
      id: "/_landing"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof LandingImport
      parentRoute: typeof rootRoute
    }
    "/_authenticated/dashboard": {
      id: "/_authenticated/dashboard"
      path: "/dashboard"
      fullPath: "/dashboard"
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    "/_landing/about": {
      id: "/_landing/about"
      path: "/about"
      fullPath: "/about"
      preLoaderRoute: typeof LandingAboutImport
      parentRoute: typeof LandingImport
    }
    "/_landing/features": {
      id: "/_landing/features"
      path: "/features"
      fullPath: "/features"
      preLoaderRoute: typeof LandingFeaturesImport
      parentRoute: typeof LandingImport
    }
    "/auth/sign-in": {
      id: "/auth/sign-in"
      path: "/auth/sign-in"
      fullPath: "/auth/sign-in"
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof rootRoute
    }
    "/auth/sign-up": {
      id: "/auth/sign-up"
      path: "/auth/sign-up"
      fullPath: "/auth/sign-up"
      preLoaderRoute: typeof AuthSignUpImport
      parentRoute: typeof rootRoute
    }
    "/_landing/": {
      id: "/_landing/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof LandingIndexImport
      parentRoute: typeof LandingImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedDashboardRoute: AuthenticatedDashboardRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

interface LandingRouteChildren {
  LandingAboutRoute: typeof LandingAboutRoute
  LandingFeaturesRoute: typeof LandingFeaturesRoute
  LandingIndexRoute: typeof LandingIndexRoute
}

const LandingRouteChildren: LandingRouteChildren = {
  LandingAboutRoute: LandingAboutRoute,
  LandingFeaturesRoute: LandingFeaturesRoute,
  LandingIndexRoute: LandingIndexRoute,
}

const LandingRouteWithChildren =
  LandingRoute._addFileChildren(LandingRouteChildren)

export interface FileRoutesByFullPath {
  "": typeof LandingRouteWithChildren
  "/dashboard": typeof AuthenticatedDashboardRoute
  "/about": typeof LandingAboutRoute
  "/features": typeof LandingFeaturesRoute
  "/auth/sign-in": typeof AuthSignInRoute
  "/auth/sign-up": typeof AuthSignUpRoute
  "/": typeof LandingIndexRoute
}

export interface FileRoutesByTo {
  "": typeof AuthenticatedRouteWithChildren
  "/dashboard": typeof AuthenticatedDashboardRoute
  "/about": typeof LandingAboutRoute
  "/features": typeof LandingFeaturesRoute
  "/auth/sign-in": typeof AuthSignInRoute
  "/auth/sign-up": typeof AuthSignUpRoute
  "/": typeof LandingIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/_authenticated": typeof AuthenticatedRouteWithChildren
  "/_landing": typeof LandingRouteWithChildren
  "/_authenticated/dashboard": typeof AuthenticatedDashboardRoute
  "/_landing/about": typeof LandingAboutRoute
  "/_landing/features": typeof LandingFeaturesRoute
  "/auth/sign-in": typeof AuthSignInRoute
  "/auth/sign-up": typeof AuthSignUpRoute
  "/_landing/": typeof LandingIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ""
    | "/dashboard"
    | "/about"
    | "/features"
    | "/auth/sign-in"
    | "/auth/sign-up"
    | "/"
  fileRoutesByTo: FileRoutesByTo
  to:
    | ""
    | "/dashboard"
    | "/about"
    | "/features"
    | "/auth/sign-in"
    | "/auth/sign-up"
    | "/"
  id:
    | "__root__"
    | "/_authenticated"
    | "/_landing"
    | "/_authenticated/dashboard"
    | "/_landing/about"
    | "/_landing/features"
    | "/auth/sign-in"
    | "/auth/sign-up"
    | "/_landing/"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LandingRoute: typeof LandingRouteWithChildren
  AuthSignInRoute: typeof AuthSignInRoute
  AuthSignUpRoute: typeof AuthSignUpRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LandingRoute: LandingRouteWithChildren,
  AuthSignInRoute: AuthSignInRoute,
  AuthSignUpRoute: AuthSignUpRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_landing",
        "/auth/sign-in",
        "/auth/sign-up"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/dashboard"
      ]
    },
    "/_landing": {
      "filePath": "_landing.tsx",
      "children": [
        "/_landing/about",
        "/_landing/features",
        "/_landing/"
      ]
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard.tsx",
      "parent": "/_authenticated"
    },
    "/_landing/about": {
      "filePath": "_landing/about.tsx",
      "parent": "/_landing"
    },
    "/_landing/features": {
      "filePath": "_landing/features.tsx",
      "parent": "/_landing"
    },
    "/auth/sign-in": {
      "filePath": "auth/sign-in.tsx"
    },
    "/auth/sign-up": {
      "filePath": "auth/sign-up.tsx"
    },
    "/_landing/": {
      "filePath": "_landing/index.tsx",
      "parent": "/_landing"
    }
  }
}
ROUTE_MANIFEST_END */
