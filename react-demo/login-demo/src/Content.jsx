import React from 'react';

import ItemList from './ItemList';
import ItemAdd from './ItemAdd';

const Content = ({
  items,
  onItemAdd,
  onItemNameChange,
  onItemDescChange
}) => {
  return (
    <div>
      <ItemList items={items} />
      <ItemAdd
        onItemAdd={onItemAdd}
        onItemNameChange={onItemNameChange}
        onItemDescChange={onItemDescChange}
      />
    </div>
  );
};
export default Content;
