import { Navigate, useRoutes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Home from "../views/Home/Home";
import MyFlights from "../views/MyFlights/MyFlights";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../views/Auth/Login/Login";
import Register from "../views/Auth/Register/Register";
import { useSelector } from "react-redux";
const Router = () => {
  const user = useSelector((state) => state.user.user);
  const isUserLogin = Object.keys(user).length == 0 ? false : true;
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "", element: <Home /> },
        isUserLogin
          ? { path: "ucuslarim", element: <MyFlights /> } //Burada kullanıcı eğer login yapmamış ise Uçuşlarım sayfasına girebilmesinin önüne geçiyoruz.
          : { path: "ucuslarim", element: <Home /> },
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
