import React from 'react';

import { randColor } from './mocks';

const Body = ({ children, showContents, onClick }) => {
  return (
    <div onClick={onClick} style={{ backgroundColor: randColor()}}>
      'Body'
      {showContents && children}
    </div>
  );
};
export default Body;
