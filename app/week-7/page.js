"use client";


import ItemList from "./item-list";
import Form from './form.js';
import { useState } from "react";
import Items from "./item.json";


export default function Page() {
  const [product, setProduct] = useState(Items);
  const handleAddproduct = (newproduct) => {
    setProduct([...product, newproduct]);
  }
    return (
      <main className="bg-black">
        <Form onAddProduct={handleAddproduct}/>
        <h1 className="text-white font-bold text-[30px] ">Shopping List</h1>
        <ItemList Items={ product}/>
      </main>
    );
  }