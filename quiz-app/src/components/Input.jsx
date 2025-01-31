export default function Input(props){
    return(
        <div>
            <input type="radio" id={props.key} value={props.answer} name={props.name}/>
            <label>{props.answer}</label>
        </div>
    )
}