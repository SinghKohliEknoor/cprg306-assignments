"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import Form from "./form";
import MealIdeas from "./meal-ideas";
import { fetchShoppingList, addShoppingItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [product, setProduct] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Fetch shopping list from Firestore when the component mounts
  useEffect(() => {
    const loadShoppingList = async () => {
      const items = await fetchShoppingList();
      setProduct(items);
    };
    loadShoppingList();
  }, []);

  // Function to handle adding a product
  const handleAddProduct = async (newProduct) => {
    await addShoppingItem(newProduct);
    setProduct([...product, newProduct]);  // Optimistic update
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/,.*/g, '').replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return (
      <div>
        <h1>Week 9</h1>
        <p>You are not logged in</p>
      </div>
    );
  }

  return (
    <main className="bg-black p-4">
      <div className="flex">
        <div className="flex-1">
          <Form onAddProduct={handleAddProduct} />
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
