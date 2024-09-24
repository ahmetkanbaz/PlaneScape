import PropTypes from 'prop-types'
const ErrorDanger = ({message}) => {
  return (
    <div className="container mt-4">
      <div className="alert alert-danger py-4" role="alert">
        <p className="mb-0 text-center">
          {message}
        </p>
      </div>
    </div>
  );
};

ErrorDanger.propTypes = {
  message: PropTypes.string
}

export default ErrorDanger;
