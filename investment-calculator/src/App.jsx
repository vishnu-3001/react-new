import Header from "./components/Header";
import Panel from "./components/Panel";
import Results from "./Results";
import { useState } from "react";


function App() {
const [values,setValues]=useState({'INITAL INVESTMENT':0,'ANNUAL_INVESTMENT':0,'YEARS':0,'DURATION':0})
function updateValues(label,value){
  setValues((prevState)=>{
    return {...prevState,[label]:value}
  })
}

  return (
    <div>
      <Header />
      <Panel initial_values={values} changeValues={updateValues}/>
      <Results values={values}/>
    </div>
  )
}

export default App
