"use client";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
export default function Form({onAddProduct}){
    const [product, setProduct] = useState({ id:"",
        name: "",quantity:1,category:"Produce"
    });

    const increment = () => {
        console.log(product.count);
        setProduct({...product,quantity: product.quantity+1});
        return;
    }
    const decrement = () => {
        setProduct({...product,quantity: product.quantity-1});
        return;
    }
    const handleNameChange = (e) => {
        setProduct({...product,name: e.target.value});
        return;
    }

    const handleCategorychange = (e) => {
        setProduct({...product,category: e.target.value});
        return;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newproduct = {
            id: uuidv4(),
            name: product.name,
            quantity: product.quantity,
            category: product.category
        }
        onAddProduct(newproduct);
        setProduct({name:"",quantity:1,category:"Produce"});
        return;
    }

    return(


        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-gray-500 rounded-2xl p-4 m-4"> 
                <div className="mb-4">
                    <input type="text" name="name" placeholder="Item Name" value={product.name} className="w-full" required onChange={(e) => handleNameChange(e)} />
                </div>
                <div className="flex-1 inline-flex ">
                    <div className="mb-4 border-solid border-2 border-black flex-1 inline-flex justify-center items-center bg-white">
                        <label className="m-2">
                            {product.quantity}
                        </label>
                        <div className="ml-5">
                            <button onClick={increment} type="button" className="  m-1 h-8 w-10 bg-blue-700 border-solid border-black border-2">+</button>
                            <button onClick={decrement} type="button" className="  m-1 h-8 w-10 bg-blue-700 border-solid border-black border-2 disabled:bg-gray-400" disabled={product.quantity==1}>-</button>
                        </div>
                    </div>
                    <div className="mb-4 ml-10">
                        <select name="category" value={product.category} onChange={(e) => handleCategorychange(e)}>
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