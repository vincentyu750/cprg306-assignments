"use client";
import React, { useState } from 'react';

import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [];

  function sortByName() {
    return items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  function sortByCategory() {
    return items.slice().sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSortBy = (newSortBy) => {
    setSortBy(newSortBy);
  };

  if (sortBy === "name") {
    sortedItems = sortByName();
  } else if (sortBy === "category") {
    sortedItems = sortByCategory();
  }

  return (
    <div>
      <h3 className='inline'>
          Sort By:
      </h3>
      <div>
        <button
          onClick={() => handleSortBy("name")}
          className={`bg-${sortBy === "name" ? "teal-300" : "teal-100"} m-4 p-2 rounded-lg`}
          style={{ backgroundColor: sortBy === "category" ? "orange" : "red" }}
        >
          Sort by name
        </button>

        <button
          onClick={() => handleSortBy("category")}
          className={`bg-${sortBy === "category" ? "teal-300" : "teal-100"} m-4 p-2 rounded-lg`}
          style={{ backgroundColor: sortBy === "name" ? "orange" : "red" }}
        >
          Sort by category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item.name)}
        />
      ))}
    </div>
  );
}
