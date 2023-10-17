"use client";

import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("produce"); // Set default value

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    // Call the onAddItem function passed from the parent component
    onAddItem(newItem);

    // Reset form inputs
    setName("");
    setQuantity("");
    setCategory("produce"); // Reset to default value
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main className="w-full">
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      >
        <div className="mb-2">
          <input
            type="text"
            placeholder="Item Name"
            required
            value={name}
            onChange={handleNameChange}
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={handleQuantityChange}
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          />
          <select
            value={category}
            onChange={handleCategoryChange}
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
