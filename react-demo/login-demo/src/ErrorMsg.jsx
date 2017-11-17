import React from 'react';

const ErrorMsg = ({ error }) => {
  return (
    <div style={{color: 'red'}} >
      {error}
    </div>
  )
};
export default ErrorMsg;

