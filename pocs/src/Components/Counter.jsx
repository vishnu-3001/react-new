import { useState } from "react";
export default function Counter(){
    const [counter,setCounter]=useState(0);
    function increment(){
        setCounter((prev)=>prev+1);
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Click to increment</button>
        </div>
    )
}