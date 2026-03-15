import classes from "./Profile.module.css"
export default function Profile(){
    const details=[
        {"label":"Date of Birth","value":"12/12/1990","icon":"./Assets/Birthicon.svg"},
        {"label":"Gender","value":"Female","icon":"./Assets/FemaleIcon.svg"},
        {"label":"Contact Info","value":"1234567890","icon":"./Assets/PhoneIcon.svg"},
        {"label":"Emergency","value":"1234567890","icon":"./Assets/PhoneIcon.svg"},
        {"label":"Insurance Provider","value":"Star Health Insurance","icon":"./Assets/InsuranceIcon.svg"},
    ]
    return(
        <div className={classes.profileContainer}>
            <div className={classes.profileContent}>
                <div className={classes.profileHeader}>
                    <img src="./Assets/Layer 6.png" alt="patient profile" className={classes.profilePicture}></img>
                    <p className={classes.patientName}>Jessica Taylor</p>
                </div>
                <div className={classes.detailContainer}>
                    {details.map((detail,index)=>{
                        return(
                            <div key={index} className={classes.detailRow}>
                                <div>
                                    <img src={detail.icon} alt={detail.label}></img>
                                </div>
                                <div>
                                    <p className={classes.detailLabel}>{detail.label}</p>
                                    <p className={classes.detailValue}>{detail.value}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className={classes.detailsButton}>Show All Details</button>
            </div>
        </div>
    )
}