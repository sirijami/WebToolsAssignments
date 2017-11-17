import React from 'react';

const Register = ({
  toRegister,
  toCancel,
  enterUsername,
  enterPassword,
  isValid
}) => {
  return (
  <div>
    <div>Desired Username: <input onChange={enterUsername}/></div>
    <div>Enter a Password: <input onChange={enterPassword} type="password" /></div>
    <div>Confirm Password: <input type="password" /></div>
    <button disabled={!isValid} onClick={toRegister}>Register</button>
    <div>
      <a href="#cancel" onClick={ (e) => { e.preventDefault(); toCancel(e);}}>I am an existing user</a>
    </div>
  </div>
  );
};
export default Register;
