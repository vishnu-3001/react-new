import UserInput from "./UserInput"
export default function Panel(props){
    return(
        <div id="user-input">
            <div className="input-group">
            {
                Object.keys(props.initial_values).map((key)=>{
                    return <UserInput key={key} label={key} changeValues={props.changeValues} value={props.initial_values[key]} />
                })
            }
            </div>
        </div>
    )
}