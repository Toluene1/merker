import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import GlobalProvider from "./Provider/GlobalProvider";
import "bootstrap/dist/js/bootstrap.bundle.min"
import { Suspense } from "react";
import './assets/styles/index.scss'

const Signup = React.lazy(()=> import("./pages/Signup"))
const Login = React.lazy(()=> import("./pages/Login"))
const ResetPassword = React.lazy(()=> import("./pages/forgotPassword/ResetPassword"))
const Otp = React.lazy(()=> import("./pages/forgotPassword/otp"))


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error404 />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/otp",
    element: <Otp/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </Suspense>
  </React.StrictMode>
);
