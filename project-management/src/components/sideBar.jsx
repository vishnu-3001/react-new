import Button from "./Button";
function SideBar(props){
    console.log(props.projects)
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200"> Your Projects</h2>
        <div>
        <Button name="Add project +" onClick={props.addClick}></Button>
        </div>
        <ul>
            {props.projects.map(project=>(
                <li key={project.id}>
                    <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400">
                        {project.title}
                    </button>
                </li>
            ))}
        </ul>
        </aside>
    )
}
export default SideBar;