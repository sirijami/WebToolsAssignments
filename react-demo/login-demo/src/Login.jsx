import React from 'react';

const Login = ({
  toLogin,
  enterUsername,
  enterPassword,
}) => {
  return (
  <div>
    <div>Username: <input onChange={enterUsername}/></div>
    <div>Password: <input onChange={enterPassword} type="password" /></div>
    <button onClick={toLogin}>Login</button>
  </div>
  );
};
export default Login;
