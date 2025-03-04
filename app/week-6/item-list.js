"use client";

import Item from "./item";
import Items from "./item.json";
import {useState} from "react";

export default function ItemList(){

    const [items, setItems] = useState(Items);
    const [sortType, setSortType] = useState("name");

    const sortedItems = [...Items].sort((a, b) => 
        a[sortType].localeCompare(b[sortType])
    );


      return(
        <main>
            <div className="flex">
            <h2 className="text-white font-bold text-[20px] ">Sort By:</h2>
            <button className={`{px-4 py-2 ml-4 rounded-lg font-medium transition-colors duration-300 ${
                        sortType === "name" ? "bg-blue-500 text-white" : "bg-gray-400 text-black"}`
                    } onClick={()=>setSortType("name")} >Name</button>
            <button className={`{px-4 py-2 ml-4 rounded-lg font-medium transition-colors duration-300 ${
                        sortType === "category" ? "bg-blue-500 text-white" : "bg-gray-400 text-black"}`
                    } onClick={()=>setSortType("category")}>Category</button>
            
            </div>
            <div>
            {sortedItems.map((item) => (
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                ))}
            </div>
        </main>
      );
}