import { useState } from "react";

import Header from "./components/Header";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [projectState, setProjectState] = useState({selectedProjectId: undefined, projects: [], tasks: []})

  function handleStartProject(){
    setProjectState((prevState) => {return {
      ...prevState,
      selectedProjectId: null,
    }})
  }

  function handleAddProject(projectData) {
    const newProject = {...projectData,id: Math.random()*100}
    setProjectState((prevState)=> {
      return {
        ...prevState,
        projects: [...prevState.projects,newProject],
        selectedProjectId:  undefined,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectState((presState) => {
      return {
        ...presState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((presState) => {
      return {
        ...presState,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject(){
    setProjectState((presState) => {
      return {
        ...presState,
        selectedProjectId: undefined,
        projects: presState.projects.filter((project) => project.id !== presState.selectedProjectId)
      }
    })
  }
  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId)

  function handleAddtask(text){
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {text: text, id: taskId, projectId: prevState.selectedProjectId}
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks],
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }
 

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddtask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProject onStartProject = {handleStartProject} />
  }
  console.log(projectState)

 
  return (
    <>
      <Header/>
      <main className="h-screen my-8 flex gap-4">
      <Sidebar onStartProject={handleStartProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
      </main>
    </>
  );
}

export default App;
