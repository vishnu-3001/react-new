export default function Log(props){
    console.log(props.turns);
    return(
        <ol id="log">
            {props.turns.map((turn,index)=>(
                <li key={index}>
                    <span>{turn.name}</span>
                    <span>{turn.symbol}</span>
                    <span>{`(${turn.square.row},${turn.square.col})`}</span>
                </li>
            ))}
        </ol>
    )
}