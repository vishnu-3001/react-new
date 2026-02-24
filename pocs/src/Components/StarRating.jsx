import { useState } from "react";
export default function StarRating(){
    const arrays=Array(5).fill(0);
    const [value,setValue]=useState(0);
    const [comp,setComp]=useState(0);
    function onHoverOver(val){
        setValue(val);
    }
    function onMouseLeave(val){
        setValue(0);
    }
    function clickStar(val){
        setComp(val);
    }
    return(
        <div>
            {comp}
            <div>
                {arrays.map((_,index)=>{
                    return(
                        <span key={index} onMouseOver={()=>onHoverOver(index+1)} onMouseOut={()=>onMouseLeave(index+1)} onClick={()=>clickStar(index+1)}>
                            {(value>index||comp>index)? "★" : "☆"}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}