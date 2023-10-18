"use client"
import React, { useState } from 'react';

export default function NewItem()
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => 
    {
        event.preventDefault();

        const newItem = 
        {
            name,
            quantity,
            category
        };
        console.log(newItem);

        setItemCreated(true);

        setName("");
        setQuantity("");
        setCategory("");

        setItemCreated(false);

        alert("Added item: "+ newItem.name +
              ", quantity: "+ newItem.quantity +
              ", category: "+newItem.category);

    };

    const handleNameChange = (event) => 
    {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => 
    {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => 
    {
        setCategory(event.target.value);
    };

    return (
        <main class="flex justify-center w-full">
            <form 
                onSubmit={handleSubmit}
                class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                    <div class="mb-2">
                        <input 
                            type="text" 
                            placeholder='Item Name' 
                            required 
                            onChange={handleNameChange}
                            class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                        </input>
                    </div>
                <div class="flex justify-between w-full">
                    <input 
                        type="number" 
                        min="1" 
                        max="99" 
                        required
                        onChange={handleQuantityChange} 
                        class="w-20 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                        >
                    </input>
                    <select 
                        onChange={handleCategoryChange}
                        class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                        <option value="produce" selected="">Produce</option>
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
                    class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
            </form>
        </main>
    );
}