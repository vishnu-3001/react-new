export default function UserInput(props){
    function handleChange(event){
        props.changeValues(props.label,event.target.value)
    }
    return(
        <div>
            <label>{props.label}</label>
            <input type="number" className='value-input' onChange={handleChange} value={props.value} />
        </div>
    )
}