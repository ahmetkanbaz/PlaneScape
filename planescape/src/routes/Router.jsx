import { Navigate, useRoutes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Home from "../views/Home/Home";
import MyFlights from "../views/MyFlights/MyFlights";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../views/Auth/Login/Login";
import Register from "../views/Auth/Register/Register";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "ucuslarim", element: <MyFlights /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Navigate to="login" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
