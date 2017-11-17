import React from 'react';

const Hello = ({ addHello, changeName, message='Hellop', names, name }) => {
  const nameList = names.map( (name, index) => ( <li key={index}>{name}</li> ) );
  return (
		<div>
			<ul>
        {nameList}
			</ul>
      <input onChange={changeName} value={name}/>
			<button onClick={addHello} >Say {message}</button>
		</div>
  );
};

export default Hello;
