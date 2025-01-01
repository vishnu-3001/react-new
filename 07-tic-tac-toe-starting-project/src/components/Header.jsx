import gameImage from '../../public/game-logo.png'
export default function Header(){
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img style={{width:'100px',height:'100px'}} src={gameImage} alt="Tic-Tac-Toe"></img>
            <h2 style={{color:'black',margin:'0%'}}>Tic-Tac-Toe</h2>
        </div>
    )
}