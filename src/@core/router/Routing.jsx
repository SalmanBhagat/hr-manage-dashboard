import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Use lazyLoding Import
const Home = lazy(() => import("@/pages/main/Home"))
const Login = lazy(() => import("@/pages/auth/Login"))
const Register = lazy(() => import("@/pages/auth/Register"))

// Function to not repetation suspens
const withSuspense = (Component) => {
    return(
    <Suspense>
        <Component/>
    </Suspense>
    )
}

export const routes = createBrowserRouter([
    {path: "/", element: withSuspense(Home)},
    {path: "/home", element:  withSuspense(Home)},
    {path: "/login", element:  withSuspense(Login)},
    {path: "/register", element:  withSuspense(Register)},
])