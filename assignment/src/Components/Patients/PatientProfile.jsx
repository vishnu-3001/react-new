import classes from "./PatientProfile.module.css"
export default function PatientProfile({name,age,gender,img,active}){
    const profileClass = `${classes.patientProfileTab} ${active ? classes.active : ''}`;
    return(
        <div className={profileClass}>
            <div className={classes.patientProfileInfo}>
                <img src= {img} alt="profilepic" className={classes.patientProfileImg}></img>
                <div>
                    <p className={classes.patientName}>{name}</p>
                    <p className={classes.patientDetails}>{gender}, {age}</p>
                </div>
            </div>
            <img src="./Assets/more_horiz.svg" alt="more"></img>
        </div>
    )
}