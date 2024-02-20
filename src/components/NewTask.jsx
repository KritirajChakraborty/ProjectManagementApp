import { useState } from "react"
import Button from "./Button";

export default function NewTask({onAdd}){
    const [enteredTask,setEnteredTask] = useState('');

    function handleChange (event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
        onAdd(enteredTask);
        setEnteredTask('')
    }
    return <div>
        <input type='text' className="w-64 px-2 py-1 bg-gray-200 rounded-sm mr-2" onChange={handleChange} value={enteredTask}/>
        <Button onChange={handleClick}>Add Task</Button>
    </div>
}