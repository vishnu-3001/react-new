import Player from "./Player";
export default function Players(props){
    return(
        <div id="game-container">
        <ol id="players">
            <li className={props.currentPlayer===1?'active':''}>
                <Player key='player-1' defaultName="Player 1" symbol="X" saveName={props.saveName} />
            </li>
            <li className={props.currentPlayer===2?'active':''}>
                <Player key='player-2' defaultName="Player 2" symbol ="O" saveName={props.saveName} />
            </li>
        </ol>
      </div>
    )
}