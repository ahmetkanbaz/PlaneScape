const UserMenu = () => {
  return (
    <div className="d-flex">
      <div className="dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          İsim Soyisim
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Çıkış Yap
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
