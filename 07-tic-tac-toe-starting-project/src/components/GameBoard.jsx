const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]];
export default function GameBoard(props){
    let gameBoard=initialGameBoard;
    // console.log(props.turns);
    for(let i=0;i<props.turns.length;i++){
        const{row,col}=props.turns[i].square;
        gameBoard[row][col]=props.turns[i].symbol;
    }
    // const[gameBoard,setgameBaord]=useState(initialGameBoard);
    // function handleClick(rowIndex,colIndex){
    //     if(gameBoard[rowIndex][colIndex]!==null){
    //         return;
    //     }
    //     setgameBaord((prevState)=>{
    //         const newBoard=prevState.map((row,rowIndex)=>row.map((playerSymbol,colIndex)=>playerSymbol));
    //         newBoard[rowIndex][colIndex]=props.currentPlayer===1?'X':'O';
    //         return newBoard;
    //     });
    //     props.changePlayer();
    //}
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>props.changePlayer(rowIndex,colIndex)} disabled={playerSymbol!=null}>{playerSymbol}</button></li>)}
                </ol>
                </li>)}
        </ol>
    )
}