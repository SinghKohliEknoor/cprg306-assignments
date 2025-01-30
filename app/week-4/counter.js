"use client";

import { useState } from "react";
export default function Counter(){
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
        if(count==10){
            alert("Value 10 achieved");
        }
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment} type="button"
            className="p-2 m-2 bg-blue-700 hover:bg-blue-500  active:bg-red-200 disabled:bg-gray-300"  disabled={count===10}>increment</button>
        </div>
    )
}