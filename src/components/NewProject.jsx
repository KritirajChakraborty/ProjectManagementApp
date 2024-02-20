import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";
export default function NewProject({onAdd, onCancel}){

   const title = useRef();
   const description = useRef();
   const dueDate = useRef();
   const modal = useRef();

   function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;
    
    if(enteredTitle.trim() ==='' || enteredDescription.trim() ==='' || enteredDate.trim() ==='' ){
        modal.current.open();
        return;
    }

    onAdd({title: enteredTitle, description: enteredDescription, dueDate: enteredDate})
   }
    return(
        <>
        <Modal ref={modal}>
            <h2 className="my-4 font-bold md:text-xl text-gray-800">Invalid Input</h2>
            <p className="text-gray-400 mb-4">You forgot to enter a value</p>
            <p className="text-gray-400 mb-4">Please provide value for every input field...</p>
        </Modal>
        <div className="w-2/3 mt-12">
            <menu className="flex items-center justify-end gap-4 my-6">
                <li><button className="text-gray-700 hover:text-gray-950 font-bold" onClick={onCancel}>Cancel</button></li>
                <li><button className="bg-gray-800 text-gray-50 hover:bg-gray-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
            <Input ref={title} label='Title' type='text'/>
            <Input ref={description} label='Description' textarea/>
            <Input ref={dueDate} label='DueDate' type='date'/>
            </div>
        </div>
        </>
    )
}