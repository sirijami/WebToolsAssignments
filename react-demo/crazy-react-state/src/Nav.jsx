import React from 'react';

const Nav = ({
  bumpCount,
  showLogin,
  showContent
}) => {
  return (
    <nav>
      {bumpCount && <button onClick={bumpCount}> Take it to 11! </button>}
      {showLogin && 'Need to Login'}
      {showContent && 'Showing Content'}
    </nav>
  );
};

export default Nav;
