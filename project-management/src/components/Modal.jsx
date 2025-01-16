import { useImperativeHandle } from 'react'
import { useRef } from 'react';
import {createPortal} from 'react-dom'
export default function Modal(props){
    const dialog=useRef();
    useImperativeHandle(props.ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog}>
        {props.children}
        <form method="dialog">
            <button>Close</button>
        </form>
        </dialog>,document.getElementById('modal-root')
    )
}