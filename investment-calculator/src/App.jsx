import Header from "./components/Header";
import Panel from "./components/Panel";
import { useState } from "react";




function App() {
const [values,setValues]=useState({'INITAL INVESTMENT':0,'ANNUAL_INVESTMENT':0,'YEARS':0,'DURATION':0})
function updateValues(label,value){
  setValues((prevState)=>{
    return {...prevState,[label]:value}
  })
  console.log(values)
}

  return (
    <div>
      <Header />
      <Panel initial_values={values} changeValues={updateValues}/>
    </div>
  )
}

export default App
