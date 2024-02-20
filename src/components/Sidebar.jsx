import Button from "./Button"
export default function Sidebar({onStartProject,projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-gray-900 text-gray-50 md:w-72 rounded-r-xl">
            <h2 className='mb-8 font-bold uppercase md:text-xl text-gray-200'>Your Projects...</h2>
            <div>
                <Button onChange={onStartProject}>+Add project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {

                let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-gray-400 hover:text-gray-800 hover:bg-gray-400"

                if(project.id === selectedProjectId){
                    cssClasses += ' bg-gray-400 text-gray-800'
                } else {
                    cssClasses += ' bg-gray-200'
                }

                return (
            <li key={project.id}><button className={cssClasses} onClick={()=> onSelectProject(project.id)}>{project.title}</button></li>)})}</ul>
        </aside>
    )
}