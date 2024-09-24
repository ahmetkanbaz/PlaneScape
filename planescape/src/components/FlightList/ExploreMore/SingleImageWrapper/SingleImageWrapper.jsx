/* eslint-disable react/prop-types */
const SingleImageWrapper = ({singleImage}) => {
  let {imageUrl, alt, icon: Icon, title} = singleImage
  return (
    <div className="position-relative mt-4 singleImage">
      <img
        src={imageUrl}
        alt={alt}
        className="rounded-4 img-fluid position-absolute z-0 w-100 object-fit-cover"
      />
      <div className="position-absolute bottom-0 ps-4 pb-4 fs-4">
        <Icon />
        <p className="mb-0 fw-medium">{title}</p>
      </div>
    </div>
  );
};

export default SingleImageWrapper;
