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
  function handleCancel(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
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
  function handleSelectProject(id){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:id,
      };
    });

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
     <SideBar addClick={handleAdd} projects={projectsState.projects} onSelectProject={handleSelectProject}></SideBar>
     {!content&&<NoProjectSeelected onClick={handleAdd}></NoProjectSeelected>}
     {content&&<NewProject onSave={handleAddProject} onCancel={handleCancel}></NewProject>}
    </main>
  );
}

export default App;
