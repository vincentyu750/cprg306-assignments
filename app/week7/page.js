"use client";
import React, { useState } from 'react';
import Link from "next/link";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Home() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleCreateItem = (item) => {
    setItems([...items, item]);
  };

  const handleCloseNewItem = () => {
  };

  // Handle item selection
  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing size and emoji
    const cleanedItemName = itemName.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1F9A0}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FAB0}-\u{1FABF}\u{2B50}\u{E0020}-\u{E007F}]+/gu, '').replace(/,.*$/, '');
    console.log(cleanedItemName);


    setSelectedItemName(cleanedItemName);
  };

  return (
    <main>
      <h1>My Shopping List</h1>
      <Link href={".."}>
        <h1>Root Page</h1>
      </Link>
      <h1 className="text-4xl font-bold m-5 text-yellow-500">
        Week 7: Shopping List
      </h1>
      <NewItem onAddItem={handleCreateItem} />
      <div className="flex">
        <div className="w-1/2">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
