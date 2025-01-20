import { useImperativeHandle } from 'react'
import { useRef } from 'react';
import {createPortal} from 'react-dom'
import Button from './Button';
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
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
        {props.children}
        <form method="dialog" className='mt-4 text-right'>
            <Button name="Close"></Button>
        </form>
        </dialog>,document.getElementById('modal-root')
    )
}