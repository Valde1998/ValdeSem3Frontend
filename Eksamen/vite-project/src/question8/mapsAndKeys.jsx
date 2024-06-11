import React from 'react';

function ItemList() {
  console.log(window)
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' }
  ];

  return (
    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {items.map(item => (
        <li key={item.id} style={{ margin: '10px' }}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;