import { useState,useRef } from "react";
import ResultModel from "./ResultModal";
export default function TimerChallenge(props){
    const timer=useRef()
    const modal=useRef()
    const [started,setStarted]=useState(false);
    const [timerExpired,setTimerExpired]=useState(false);
    function handleStart(){
        setStarted(true);
        timer.current=setTimeout(()=>{
            modal.current.showModal()
            setTimerExpired(true);
        },props.targetTime*1000);
    }
    function handleStop(){
        clearTimeout(timer.current);
    }
    return(
        <>
        <ResultModel result="lost" targetTime={props.targetTime} ref={modal}></ResultModel>
        <section className="challenge">
            <h2>{props.title}</h2>
            <p className="challenge-time">
                {props.targetTime}second{props.targetTime>1?'s':''} 
            </p>
            <p>
                <button onClick={started?handleStop:handleStart}>
                    {started?'stop':'start'} challenge
                </button>
            </p>
            <p className={started?'active':undefined}>
                {started?'Timer is running':'Timer stopped'}
            </p>
            {timerExpired && <p>You lost</p>}
        </section>
        </>
    )
}