import React from "react";
import { createBrowserRouter, RouterProvider, Outlet,Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Nav from "../pages/Nav";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Outlet />
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "product/:id", element: <Product /> },
      { path: "*", element: <Navigate to='/' /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

