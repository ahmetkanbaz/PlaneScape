import SectionTitle from "../../SectionTitle/SectionTitle";
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className="col-md-6">
      <SectionTitle title="Giriş Yap" classname="fw-semibold" />

      <p className="mb-0 fst-italic">Hesabınız Yok Mu? <Link to='/auth/register'>Kayıt Ol</Link></p>
    </div>
  );
};

export default LoginForm;
