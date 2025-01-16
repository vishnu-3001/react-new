import image from '../assets/no-projects.png'
import Button from './Button'
export default function NoProjectSeelected(props){
    return(
        <div className='mt-24 text-center w-2/3'>
            <img src={image} alt="Empty task list" className='w-16 h-16 object-contain mx-auto'></img>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
            <p className='text-stone-400 mb-4'>  Select a project or get started with a new one</p>
            <p>
                <Button name="create new project" onClick={props.onClick}></Button>
            </p>
        </div>
    )
}