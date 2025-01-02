import Header from "./components/Header"
import Players from "./components/Players"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning_combinations"
import { use } from "react"

function App() {
  const[gameTurns,setGameTurns]=useState([]);
  const[playerNames,setPlayerName]=useState({1:'Player 1',2:'Player 2'}); 
  let currentPlayer=1;
  if(gameTurns.length>0&&gameTurns[0].symbol=='X'){
    currentPlayer=2;
  }
  function handlePlayerChange(rowIndex,colIndex){
    // setCurrentPlayer((prevState)=>prevState===1?2:1);
    setGameTurns((prevState)=>{
      let currentSymbol='X';
      if(prevState.length>0&&prevState[0].symbol=='X'){
        currentSymbol='O';
      }
      const newTurns=[{square:{row:rowIndex,col:colIndex},symbol:currentSymbol,name:currentSymbol==='X'?playerNames[1]:playerNames[2]},...prevState];
      return newTurns;
    })
  }
  function saveName(player,name){
    if(player==='X'){
      setPlayerName((prevState)=>({...prevState,1:name}));
    }
    else{
      setPlayerName((prevState)=>({...prevState,2:name}));
    }
  }
  return (
    <div>
      <div style={{'display':'flex','justifyContent':'center','alignItems':'center','flexDirection':'column'}}>
      <Header/>
      </div>
    <Players currentPlayer={currentPlayer} saveName={saveName}/>
    <GameBoard changePlayer={handlePlayerChange} turns={gameTurns} />
    <div>
      <Log turns={gameTurns}></Log>
    </div>
    </div>
  )
}

export default App
