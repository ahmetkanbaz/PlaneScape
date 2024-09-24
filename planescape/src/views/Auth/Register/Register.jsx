import AuthImage from "../../../components/Auth/AuthImage/AuthImage";
import RegisterForm from "../../../components/Auth/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row">
          <RegisterForm />
          <AuthImage imageUrl="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </section>
  );
};

export default Register;
