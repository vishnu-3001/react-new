import NavBarButton from "./NavBarButton"
import classes from "./NavBar.module.css"
export default function NavBar(){
    const navButtons=[{"text":"Overview","src":"./Assets/home_FILL0_wght300_GRAD0_opsz24.svg"},
        {"text":"Patients","src":"./Assets/group_FILL0_wght300_GRAD0_opsz24.svg"},
        {"text":"Schedule","src":"./Assets/BirthIcon.svg"},
        {"text":"Message","src":"./Assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"},
        {"text":"Trasnactions","src":"./Assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"}
    ]
    return(
        <div className={classes.navBar}>
            <div>
                <img src="./Assets/TestLogo.svg" alt="Company logo"></img>
            </div>
            <div className={classes.navButtons}>
                {navButtons.map((button,index)=>{
                    return <NavBarButton key={index} text={button.text} src={button.src} />
                })}
            </div>
            <div className={classes.rightMenu}>
                <div>
                    <span className={classes.doctorInfo}>
                        <img src="./Assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png" alt="doctor"></img>
                        <div>
                            <p>Dr.Jose Simons</p>
                            <p>General Practitioner</p>
                        </div>
                    </span>
                </div>
                <div>
                    <img src="./Assets/settings.svg" alt="Settings"></img>
                    <img src="./Assets/more_vert.svg" alt="more-vert"></img>
                </div>
            </div>
        </div>
    )
}