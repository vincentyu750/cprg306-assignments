"use client";
import React, { useState } from 'react';
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; // Import items data

export default function Home() {
  const [items, setItems] = useState(itemsData);

  const handleCreateItem = (item) => {
    setItems([...items, item]);
  };

  const handleCloseNewItem = () => {
    // Implement logic to close the "New Item" form if needed
  };

  return (
    <main>
      <h1>My Shopping List</h1>
      <Link href={".."}>
        <h1>Root Page</h1>
      </Link>
      <h1 className="text-4xl font-bold m-5 text-yellow-500">
        Week 6: Shopping List
      </h1>
      <NewItem onAddItem={handleCreateItem} />
      <ItemList items={items} /> {/* Pass items as a prop to ItemList */}
    </main>
  );
}
