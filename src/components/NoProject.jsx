import npImg from '../assets/project.png'
import Button from './Button'
export default function NoProject({onStartProject}){
    return (
        <div className='mt-24 text-center w-2/3'>
            <img className='w-16 h-16 object-contain mx-auto' src={npImg} alt="No Project Selected" />
            <h2 className='my-4 font-bold md:text-xl text-gray-800'>No Project Selected</h2>
            <p className='text-gray-400 mb-4'>Select a project or create a new one</p>
            <p className='mt-8'>
                <Button onChange={onStartProject}>Create new project</Button>
            </p>
        </div>
    )
}