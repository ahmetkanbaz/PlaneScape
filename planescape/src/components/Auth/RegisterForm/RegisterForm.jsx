import { Link } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useFormik } from "formik";
import FormInputLabel from "../../FormInputLabel/FormInputLabel";
import FormButton from "../FormButton/FormButton";
import { userRegister } from "../../../services/posts";
import Toast from "../../Toast/Toast";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      const response = await userRegister(values);
      Toast({
        message: response.message,
        type: response.success ? "success" : "error",
      });
      bag.resetForm();
    },
  });

  let formItems = [
    {
      index: 1,
      type: "name",
      id: "name",
      value: "Ad",
      placeHolder: "Adınızı giriniz...",
    },
    {
      index: 2,
      type: "email",
      id: "email",
      value: "E - Posta Adresi",
      placeHolder: "E - Posta adresinizi giriniz...",
    },
    {
      index: 3,
      type: "password",
      id: "password",
      value: "Şifre",
      placeHolder: "Şifrenizi giriniz...",
    },
  ];

  return (
    <div className="col-md-6">
      <SectionTitle title="Kayıt Ol" classname="fw-semibold" />
      <form onSubmit={formik.handleSubmit}>
        {formItems.map((formItem) => (
          <FormInputLabel
            key={formItem.index}
            formItem={formItem}
            formik={formik}
          />
        ))}
        <FormButton title="Kayıt Ol" />
      </form>
      <p className="mb-0 fst-italic">
        Zaten bir hesabınız var mı? <Link to="/auth/login">Giriş Yap</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
