import Header from "./components/Header"
import Players from "./components/Players"
function App() {
  

  return (
    <div>
      <div style={{'display':'flex','justifyContent':'center','alignItems':'center','flexDirection':'column'}}>
      <Header/>
    </div>
    <Players/>
    <div>
      Log
    </div>
    </div>
  )
}

export default App
