import { useState,useRef } from "react";
export default function Stopwatch(){
    const [timer,setTimer]=useState(0);
    const ref=useRef(null);
    function startTimer(val){
        if(ref.current){
            clearInterval(ref.current)
        }
        setTimer(val);
        ref.current=setInterval(()=>{
            setTimer((prev)=>{
                if(prev<=1){
                    clearInterval(ref.current);
                    return 0;
                }
                return prev-1;
            })
        },1000);
    }
    return(
        <div>
            <h1>Timer : {timer}</h1>
            <button onClick={()=>startTimer(10)}>Start</button>
            <button onClick={()=>clearInterval(ref.current)}>Stop</button>
        </div>
    )
}