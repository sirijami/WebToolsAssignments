import React from 'react';

const ItemAdd = ({
  onItemNameChange,
  onItemDescChange,
  onItemAdd
}) => {
  return (
    <div>
      <div>Name: <input onChange={onItemNameChange}/></div>
      <div>Description: <input onChange={onItemDescChange}/></div>
      <button onClick={onItemAdd}>Add</button>
    </div>
  );
};

export default ItemAdd;
