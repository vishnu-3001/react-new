import { useState } from "react";
export default function LikeButton(){
    const[like,setLike]=useState(0);
    function increase(){
        setLike((prev)=>prev+1);
    }
    function decrease(){
        if(like>0){
            setLike((prev)=>prev-1);
        }
    }
    return(
        <div>
            <p>{like}</p>
            <button onClick={increase}>Like</button>
            <button onClick={decrease}>Dislike</button>
        </div>
    )
}