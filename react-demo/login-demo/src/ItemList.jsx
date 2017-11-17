import React from 'react';

const ItemList = ({
  items = []
}) => {
  const rows = items.map( (item, index) => (
    <tr key={index}><td>{item.name}</td><td>{item.desc}</td></tr>
  ));

  return (
    <div>
      Current Items:
      <table>
        <thead>
          <tr><th>Name</th><th>Description</th></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
