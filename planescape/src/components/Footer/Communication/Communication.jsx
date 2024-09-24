import {FaInstagram, FaFacebookF, FaGithubAlt, FaMediumM} from 'react-icons/fa'
const Communication = () => {
  return (
    <div className="col-md-4">
      <p className="mb-0 fs-4 fw-medium border-bottom pb-2">Follow Us</p>
      <div className="d-flex align-items-center gap-3 mt-3 rightfooter">
        <a href="https://github.com/ahmetkanbaz" target='_blank' className="rounded-circle"><FaGithubAlt /></a>
        <a href="https://www.linkedin.com/in/ahmet-kanbaz-156002242/" target='_blank' className="rounded-circle"><FaMediumM /></a>
        <a href="#" target='_blank' className="rounded-circle"><FaFacebookF /></a>
        <a href="#" target='_blank' className="rounded-circle"><FaInstagram /></a>
      </div>
    </div>
  )
}

export default Communication