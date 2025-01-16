import SideBar from "./components/sideBar";
import NewProject from "./components/NewProject";
import NoProjectSeelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const[projectsState,setProjectsState]=useState({
    selectedProjectId:undefined,
    projects:[]
  });
  function handleAdd(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }
  function handleAddProject(newProjectData){
    const newProject={
      ...newProjectData,
      id:Math.random()
    }
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  let content;
  if(projectsState.selectedProjectId===undefined){
    content=false
  }
  else{
    content=true
  }
  return (
    <main className="h-screen my-8 flex gap-8">
     <SideBar addClick={handleAdd} projects={projectsState.projects}></SideBar>
     {!content&&<NoProjectSeelected onClick={handleAdd}></NoProjectSeelected>}
     {content&&<NewProject onSave={handleAddProject}></NewProject>}
    </main>
  );
}

export default App;
