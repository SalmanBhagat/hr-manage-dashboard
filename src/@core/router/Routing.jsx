import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoutes from "@/components/auth-state/PrivateRoutes";
import PublicRoutes from "@/components/auth-state/PublicRoutes";
import ForgotPass from "@/pages/auth/ForgotPass";
import ResetPass from "@/pages/auth/ResetPass";

// Use lazyLoding Import
const Home = lazy(() => import("@/pages/main/Home"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));

// Function to not repetation suspens
const withSuspense = (Component, routeType) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      
      {routeType === "privateRoutes" ? (
        // console.log(routeType),
        <PrivateRoutes>
          <Component />
        </PrivateRoutes>
      ) : (
        <PublicRoutes>
          <Component />
        </PublicRoutes>
      )}
    </Suspense>
  );
};

export const routes = createBrowserRouter([
  { path: "/", element: withSuspense(Home, "privateRoutes") },
  { path: "/login", element: withSuspense(Login, "publicRoutes") },
  { path: "/forgot-password", element: withSuspense(ForgotPass, "publicRoutes") },
  { path: "/reset-password", element: withSuspense(ResetPass, "publicRoutes") },
  { path: "/register", element: withSuspense(Register, "publicRoutes") },
  { path: "/home", element: withSuspense(Home, "privateRoutes") },
]);
