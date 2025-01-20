export default function Input(props){
    return(
        <div>
            <p className="flex flex-col gap-1 my-4"> 
                <label className="text-sm font-bold uppercase text-stone-500">{props.label}</label>
                <input ref={props.ref} className="w-full p-1 border-b-2 rounded-sm border-stone-30 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type={props.type} {...props}></input>
            </p>
        </div>
    )
}