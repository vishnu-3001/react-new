import { useState } from "react";

export default function Player(props){
    const [edit,setEdit]=useState(false)
    const [name,setName]=useState(props.defaultName)
    function editName(){
        setEdit((prevState)=>!prevState);
        if(edit){
            setName(document.querySelector(".player-name").value)
        }
    }
    function handleChange(event){
        setName(event.target.value)
    }
    function saveName(){
        setEdit((prevState)=>!prevState);
        props.saveName(props.symbol,name);
    }
    return(
        <div className="player">
            {!edit&&<span className="player-name">{name}</span>}
            {edit&&<input type="text" required id="player-name-input" value={name} onChange={handleChange} />}
            <span className="player-symbol">{props.symbol}</span>
            {!edit&&<button onClick={editName}>Edit</button>}
            {edit&&<button onClick={saveName}>Save</button>}
        </div>
    )
}