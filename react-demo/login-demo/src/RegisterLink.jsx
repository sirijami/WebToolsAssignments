import React from 'react';

const RegisterLink = ({
  onClick
}) => {
  return (
    <a href='#registerLink' onClick={ (e) => { e.preventDefault(); onClick(e); } }>Register</a>
  );
};

export default RegisterLink;
