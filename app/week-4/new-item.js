"use client";

import { useState } from "react";
export default function NewItem(){
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    }
    const decrement = () => {
        setCount(count -1);
    }

    return(
        <div className="flex items-center justify-center">
            <div className="bg-green-500 rounded-2xl p-4 m-4">
                <div className="text-4xl font-bold flex  items-center justify-center ">
                    <h1>{count}</h1>
                </div>
                <div >
                    <button onClick={increment} type="button"
                    className="p-2 m-2 border-solid border-2 border-black rounded-full bg-blue-700 hover:bg-blue-500  active:bg-red-200 disabled:bg-gray-300"  disabled={count===20}>Increment</button>
                
                    <button onClick={decrement} type="button"
                    className="p-2 m-2 bg-blue-700 border-solid border-black border-2 rounded-full hover:bg-blue-500  active:bg-red-200 disabled:bg-gray-300"  disabled={count===0}>Decrement</button>
                </div>
            </div>
        </div>
    )
}