import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../../redux/slices/userSlice";
const UserMenu = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => state.user.user);

  const handleLogout = (e) => {
    dispatch(setUser({}))
    e.preventDefault()
  }
  return (
    <div className="d-flex gap-3">
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
              <a className="dropdown-item" href="#" onClick={(e) => handleLogout(e)}>
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
