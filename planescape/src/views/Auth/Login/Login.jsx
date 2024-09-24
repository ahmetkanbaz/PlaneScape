import AuthImage from "../../../components/Auth/AuthImage/AuthImage"
import LoginForm from "../../../components/Auth/LoginForm/LoginForm"

const Login = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <AuthImage imageUrl='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default Login