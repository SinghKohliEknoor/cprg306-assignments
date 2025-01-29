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
            <button onClick={increment}
            className="p-2 m-2 bg-blue-700 hover:bg-blue-500">increment</button>
        </div>
    )
}