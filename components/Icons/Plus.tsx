/* eslint-disable react/prop-types */
const Plus = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
};

export default Plus;
