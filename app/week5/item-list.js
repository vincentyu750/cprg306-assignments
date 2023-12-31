"use client";

import { useState } from "react";
import Items from "./item";
import itemsData from "./items.json";

export default function ItemList() {

    //States for sorting and using items
  const [sortBy, setSortBy] = useState("name");
  const [items, setItems] = useState(itemsData);

    //Function to handle sorting change preferences
  const handleSortByChange = (newSortPreference) => {
    setSortBy(newSortPreference);

  }

  return (
    <div>
      <div>
        {/* Display the sorting options */}
        <h3 className='inline'>
          Sort By:
        </h3>
        <button className="p-1 m-2 w-28"
          onClick={() => handleSortByChange("name")}
          style={{ backgroundColor: sortBy === "name" ? "orange" : "red" }}
        >
          Name
        </button>
        <button className="p-1 m-2 w-28"
          onClick={() => handleSortByChange("category")}
          style={{ backgroundColor: sortBy === "category" ? "orange" : "red" }}
        >
          Category
        </button>
      </div>

        <ul>
            {/* Displaying the item's from items using map and rendering*/}
            {items
                .sort((a, b) => {
                if (sortBy === "name") {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === "category") {
                    return a.category.localeCompare(b.category);
                }
                })
                .map(item => (
                <Items
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
                ))
            }
        </ul>

    </div>
  );
}
