import React from 'react';
import Item from './Item';

const Saves = ({ savedItems, setSavedItems }) => {
  const handleRemoveItem = (item) => {
    const updatedItems = savedItems.filter((savedItem) => savedItem.id !== item.id);
    setSavedItems(updatedItems);
    alert('Item removed from saved items!');
  };

  return (
    <div style={{ color: 'black', fontWeight: 'bold' }}>
      <h1>Saved Items</h1>
      <div>
        {savedItems.length > 0 ? (
          savedItems.map((item) => (
            <Item
              key={item.id}
              image={item.image}
              title={item.title}
              retailPrice={item.retailPrice}
              onRemove={() => handleRemoveItem(item)}
            />
          ))
        ) : (
          <p>No saved items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Saves;
