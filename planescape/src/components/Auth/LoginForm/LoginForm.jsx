import SectionTitle from "../../SectionTitle/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import FormInputLabel from "../../FormInputLabel/FormInputLabel";
import FormButton from "../FormButton/FormButton";
import { userLogin } from "../../../services/posts";
import Toast from "../../Toast/Toast";

const LoginForm = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      const response = await userLogin(values)
      Toast({message: response.message, type: response.success ? 'success' : 'error'})
      if (response.success) navigate('/')
      bag.resetForm();
    },
  });

  let formItems = [
    {
      index: 1,
      type: "email",
      id: "email",
      value: "E - Posta Adresi",
      placeHolder: "E - Posta adresinizi giriniz...",
    },
    {
      index: 2,
      type: "password",
      id: "password",
      value: "Şifre",
      placeHolder: "Şifrenizi giriniz...",
    },
  ];
  return (
    <div className="col-md-6">
      <SectionTitle title="Giriş Yap" classname="fw-semibold mb-4" />
      <form onSubmit={formik.handleSubmit}>
        {formItems.map((formItem) => (
          <FormInputLabel
            key={formItem.index}
            formItem={formItem}
            formik={formik}
          />
        ))}
        <FormButton title='Giriş Yap' />
      </form>

      <p className="mb-0 fst-italic">
        Hesabınız Yok Mu? <Link to="/auth/register">Kayıt Ol</Link>
      </p>
    </div>
  );
};

export default LoginForm;
