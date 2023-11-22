import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    // Trigger the onSelect function with the item's name
    onSelect(name);
  };

  return (
    <div className="p-2 m-4 bg-slate-900 max-w-sm" onClick={handleClick}>
      <h2 className="text-xl font-bold">Item: {name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}
