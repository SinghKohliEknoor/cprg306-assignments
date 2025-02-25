"use client";

import { useState } from "react";
export default function Form(){
    const [count,setCount] = useState(1);
    const[name,setName] = useState("");
    const[category,setCategory] = useState("Produce");

    const increment = () => {
        setCount(count +1);
        return;
    }
    const decrement = () => {
        setCount(count -1);
        return;
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
        return;
    }

    const handleCategorychange = (e) => {
        setCategory(e.target.value);
        return;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         let item = {
            name: name,
            count: count,
            category: category
        }
        alert("Item Added: " + item.name + " Quantity: " + item.count + " Category: " + item.category);

        console.log(item);
        setName("");
        setCount(1);
        setCategory("Produce");
        return;
    }

    return(


        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-gray-500 rounded-2xl p-4 m-4"> 
                <div className="mb-4">
                    <input type="text" name="name" placeholder="Item Name" value={name} className="w-full" required onChange={(e) => handleNameChange(e)} />
                </div>
                <div className="flex-1 inline-flex ">
                    <div className="mb-4 border-solid border-2 border-black flex-1 inline-flex justify-center items-center bg-white">
                        <label className="m-2">
                            {count}
                        </label>
                        <div className="ml-5">
                            <button onClick={increment} type="button" className="  m-1 h-8 w-10 bg-blue-700 border-solid border-black border-2">+</button>
                            <button onClick={decrement} type="button" className="  m-1 h-8 w-10 bg-blue-700 border-solid border-black border-2 disabled:bg-gray-400" disabled={count==1}>-</button>
                        </div>
                    </div>
                    <div className="mb-4 ml-10">
                        <select name="category" value={category} onChange={(e) => handleCategorychange(e)}>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen">Frozen</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-center border-solid border-2 border-black rounded-full bg-blue-700 hover:bg-blue-500 disabled:bg-gray-300">
                    <button type="submit">ADD</button>
                </div>
            </form>
        </div>
    )
}