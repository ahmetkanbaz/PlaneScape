import planeLogo from '../../assets/planelogo.png'
import { Link } from "react-router-dom"
import UserMenu from './UserMenu/UserMenu'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <nav className={`navbar navbar-expand-lg ${theme == 'light' ? 'bg-body-tertiary' : 'bg-black'}`}>
  <div className="container">
    <Link to='/' className="navbar-brand">
      <img src={planeLogo} alt="Plane Scape Logo" className='img-fluid' width={100} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link" aria-current="page">Anasayfa</Link>
        </li>
        <li className="nav-item">
          <Link to='/ucuslarim' className="nav-link" aria-current="page">Uçuşlarım</Link>
        </li>
      </ul>
      <UserMenu />
    </div>
  </div>
</nav>
  )
}

export default Navbar