import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../../redux/slices/userSlice";
import { setTheme } from "../../../redux/slices/themeSlice";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const UserMenu = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => state.user.user);

  const handleLogout = (e) => {
    dispatch(setUser({}));
    localStorage.removeItem("planeScapeUser");
    e.preventDefault();
  };

  const handleChaneModeTheme = (mode) => {
    dispatch(setTheme(mode));
    localStorage.setItem("planeScapeTheme", JSON.stringify(mode));
  };
  return (
    <div className="d-flex gap-3">
      {theme == "light" ? (
        <BsFillSunFill onClick={() => handleChaneModeTheme("dark")} cursor="pointer" className="fs-5 align-self-end" />
      ) : (
        <BsFillMoonFill
          onClick={() => handleChaneModeTheme("light")}
          cursor="pointer" className="fs-5 align-self-end"
        />
      )}
      {Object.keys(user).length !== 0 ? (
        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user?.userName}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => handleLogout(e)}
              >
                Çıkış Yap
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/auth/login" className="btn btn-info px-4 py-1 rounded">
          Giriş Yap
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
