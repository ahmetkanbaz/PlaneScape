import PropTypes from 'prop-types'
const AuthImage = ({imageUrl}) => {
  return (
    <div className="col-md-6">
      <img src={imageUrl} alt="Auth Image" className="rounded img-fluid" />
    </div>
  )
}

AuthImage.propTypes = {
  imageUrl: PropTypes.string
}

export default AuthImage