import PropTypes from "prop-types";
const SectionTitle = ({ title, classname }) => {
  return <p className={`mb-0 fs-2 ${classname}`}>{title}</p>;
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  classname: PropTypes.string,
};

export default SectionTitle;
