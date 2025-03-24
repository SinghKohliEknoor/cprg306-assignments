"use client";

import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import Form from './form.js';
import { useState } from "react";
import Items from "./item.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
  const { user} = useUserAuth();
  const [product, setProduct] = useState(Items);
  const [selectedItemName, setSelectedItemName] = useState("");


  if(!user) {
    return (
        <div>
            <h1>Week 9</h1>
            <p>You are not logged in</p>
        </div>
    );
}
  const handleAddproduct = (newproduct) => {
    setProduct([...product, newproduct]);
  }

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/,.*/g, '').replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
    console.log("Selected Item:", cleanedItemName);
    setSelectedItemName(cleanedItemName);
};

    return (
      <main className="bg-black p-4">
            <div className="flex">
                <div className="flex-1">
                    <Form onAddProduct={handleAddproduct} />
                    <h1 className="text-white font-bold text-[30px]">Shopping List</h1>
                    <ItemList Items={product} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
  }