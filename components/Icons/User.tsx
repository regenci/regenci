/* eslint-disable react/prop-types */
const User = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
};

export default User;
