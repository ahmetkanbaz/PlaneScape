/* eslint-disable react/prop-types */
const FormInputLabel = ({ formItem, formik }) => {
  const { id, type, value, placeHolder } = formItem;
  const { handleChange, handleBlur, values, isSubmitting } = formik;
  return (
    <div className="mb-4 position-relative">
      <label htmlFor={id} className="form-label">
        {value}
      </label>
      <input
        type={type}
        className="form-control shadow-none"
        id={id}
        placeholder={placeHolder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[id]}
        name={id}
        disabled={isSubmitting}
      />
    </div>
  );
};

export default FormInputLabel;