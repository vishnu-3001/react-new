import { useState } from "react"
import Player from "./Player";
export default function Players(){
    const [edit,setEdit]=useState(false)
    const [name,setName]=useState("Player 1")
    function editName(){
        setEdit((prevState)=>!prevState);
        if(edit){
            setName(document.querySelector(".player-name").value)
        }
    }
    function saveName(){
        setEdit((prevState)=>!prevState);
        setName(document.querySelector(".player-name").value)
    }
    return(
        <div id="game-container">
        <ol id="players">
            <li>
                <Player key='player-1' defaultName="Player 1" symbol="X" />
            </li>
            <li>
                <Player key='player-2' defaultName="Player 2" symbol ="O" />
            </li>
        </ol>
      </div>
    )
}