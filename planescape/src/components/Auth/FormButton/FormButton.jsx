import PropTypes from "prop-types";
const FormButton = ({ title }) => {
  return (
    <div className="d-flex mt-4 justify-content-center justify-content-md-end">
      <button className="btn btn-primary" type="submit">
        {title}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  title: PropTypes.string,
};

export default FormButton;
