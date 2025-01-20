import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";
export default function NewProject(props){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef(); 
    const modal=useRef();
    function handlseSave(){
        const title2=title.current.value;
        const description2=description.current.value;
        const dueDate2=dueDate.current.value;
        if(title2.trim()==='' || description2.trim()===''||dueDate2.trim()===''){
            modal.current.open();
            return;
        }
        props.onSave({
            title:title2,
            description:description2,
            dueDate:dueDate2
        })
    }
    return(
        <>
        <Modal ref={modal}>
            <h2>please dont leave any field empty</h2>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={props.onCancel}>Cancel</button>
                    </li>
                <li>
                    <button onClick={handlseSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
            </menu>
            <div>
                <Input ref={title} label="Title" type="text"></Input>
                <Input ref={description} label="Description" type="text"></Input>
                <Input ref={dueDate} label="Due Date" type="date"></Input>
            </div>
        </div>
        </>
    )
}