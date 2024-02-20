import NewTask from "./NewTask"
export default function Task ({onAdd,onDel,task,project}){
    console.log(project.id);
    console.log(task)
    console.log(task.projectId)
    return (
        <section>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Task</h2>
            <NewTask onAdd={onAdd}/>
            {task.length === 0 &&<p className="text-gray-800 my-4">The project does not have any task</p>}
            {task.length > 0 && 
    <ul className="p-4 mt-8 rounded-md bg-gray-100">
        {task.map((singleTask) => {
            if (singleTask.projectId === project.id) {
                return (
                    <li key={singleTask.id} className="flex justify-between my-4">
                        <span>{singleTask.text}</span>
                        <button onClick={() => onDel(singleTask.id)} className="text-gray-700 hover:text-red-500">Clear</button>
                    </li>
                );
            } else {
                return null; 
            }
        })}
    </ul>
      }
        </section>
    )
}