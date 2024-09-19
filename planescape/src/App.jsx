import { useDispatch, useSelector } from "react-redux";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { setTheme } from "./redux/slices/themeSlice";
import { setUser } from "./redux/slices/userSlice";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const planeScapeTheme = localStorage.getItem("planeScapeTheme");
    const planeScapeUser = localStorage.getItem("planeScapeUser");
    if (planeScapeTheme) {
      dispatch(setTheme(JSON.parse(planeScapeTheme)));
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("planeScapeTheme", JSON.stringify("light"));
    }
    if (planeScapeUser) {
      dispatch(setUser(JSON.parse(planeScapeUser)));
    }
  }, []);
  return (
    <>
      <GlobalStyle theme={theme} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router />
    </>
  );
}

export default App;
