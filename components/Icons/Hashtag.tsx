/* eslint-disable react/prop-types */
const Hashtag = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
  );
};

export default Hashtag;
