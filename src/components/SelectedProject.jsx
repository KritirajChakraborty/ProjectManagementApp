import Task from "./Task"
import Button from "./Button"
export default function SelectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{year: 'numeric', month: 'short', day: 'numeric'})

    return (
        <div className="w-2/3 mt-16">
        <header className="pb-4 mb-4 border-b-2 border-gray-300">
            <div className="flex items-center justify-between">
                <h2 className="text-5xl font-bold text-gray-800 mb-2">{project.title}</h2>
                <Button onChange={onDelete}>Delete</Button>
            </div>
            <p className="mb-4 text-xl text-gray-600 whitespace-pre-wrap">{project.description}</p>
            <p className="text-gray-600 text-xl">{formattedDate}</p>
        </header>
        <Task onAdd={onAddTask} onDel={onDeleteTask} task={tasks} project={project}/>
        </div>
    )
}