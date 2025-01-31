import { useState,useEffect } from "react"
export default function QuestionTimer(props){
    const[remtime,setRemTime]=useState(props.timeout);
    useEffect(()=>{
        const timer=setTimeout(props.onTimeout,props.timeout);
        return()=>{
            clearTimeout(timer);
        }
    },[props.onTimeout,props.timeout])
    useEffect(()=>{
        const interval=setInterval(()=>{
            setRemTime((prev)=>prev-100);
        },100);
        return()=>{
            clearInterval(interval);
        }
    },[])
    return(
        <progress id="question-time" max={props.timeout} value={remtime}></progress>
    )
}