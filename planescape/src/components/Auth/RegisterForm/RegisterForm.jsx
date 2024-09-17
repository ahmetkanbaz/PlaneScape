import { Link } from "react-router-dom"
import SectionTitle from "../../SectionTitle/SectionTitle"

const RegisterForm = () => {
  return (
    <div className="col-md-6">
      <SectionTitle title='Kayıt Ol' classname='fw-semibold' />

      <p className="mb-0">Zaten bir hesabınız var mı? <Link to='/auth/login'>Giriş Yap</Link></p>
    </div>
  )
}

export default RegisterForm