import {createPortal} from 'react-dom';
export default function ResultModel(props){
    return createPortal(
        <dialog className="result-modal" ref={props.ref}>
            <h2>{props.result}</h2>
            <p>Target time was <strong>{props.targetTime} seconds.</strong></p>
            <p> you stopped timer with <strong> X </strong> seconds left</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}