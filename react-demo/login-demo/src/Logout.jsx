import React from 'react';
const Logout = ({
  onLogout
}) => {
  return (
    <a
      style={{ marginLeft: '10px' }}
      href='#logout'
      onClick={ (e) => { e.preventDefault(); onLogout(e); } }
    >
      Logout
    </a>
  );
};
export default Logout;
