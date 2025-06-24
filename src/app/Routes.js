import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// U T I L S
import UtilsProtectAuthRoutes from "../utils/routes/UtilsProtectAuthRoutes";

// V I E W S
import AuthLayout from "../views/auth/layout/AuthLayout";
import AuthIndexLogin from "../views/auth/pages/AuthIndexLogin";
import AuthIndexRegister from "../views/auth/pages/AuthIndexRegister";
import ClientLayout from "../views/client/layout/ClientLayout";
import ClientIndexAbout from "../views/client/pages/about/ClientIndexAbout";
import ClientIndexCircuit from "../views/client/pages/circuits/ClientIndexCircuit";
import IndexCircuitDetails from "../views/client/pages/circuits/IndexCircuitDetails";
import ClientIndexHomePage from "../views/client/pages/home/ClientIndexHomePage";

// MAIN FUNCTION: ROUTES
export default function Routes() {
  const currentUser = false;
  return useRoutes([
    { path: "/", element: <Navigate to={"/index"} />, replace: true },

    // CLIENT LAYOUT
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { path: "index", element: <ClientIndexHomePage />, index: true }, // Home page.
        { path: "about", element: <ClientIndexAbout /> }, // about page.
        { path: "circuits", element: <ClientIndexCircuit /> }, // circuits page.
        { path: "circuits/:slug/:id", element: <IndexCircuitDetails /> }, // circuits-details page.
      ],
    },

    // AUTH LAYOUT
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: (
            <UtilsProtectAuthRoutes isAuthenticated={currentUser}>
              <AuthIndexLogin />
            </UtilsProtectAuthRoutes>
          ),
        },
        {
          path: "register",
          element: (
            <UtilsProtectAuthRoutes isAuthenticated={currentUser}>
              <AuthIndexRegister />
            </UtilsProtectAuthRoutes>
          ),
        },
      ],
    },
  ]);
}
