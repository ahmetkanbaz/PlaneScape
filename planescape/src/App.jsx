import { useDispatch } from "react-redux";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { setTheme } from "./redux/slices/themeSlice";
import { setUserId } from "./redux/slices/userIdSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const planeScapeTheme = localStorage.getItem('planeScapeTheme')
    const planeScapeUserId = localStorage.getItem('planeScapeUserId')
    if (planeScapeTheme) {
      dispatch(setTheme(JSON.parse(planeScapeTheme)))
    }
    else {
      dispatch(setTheme('light'))
      localStorage.setItem('planeScapeTheme', JSON.stringify('light'))
    }
    if (planeScapeUserId) {
      dispatch(setUserId(JSON.parse(planeScapeUserId)))
    }
  }, [])
  return (
    <>
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
