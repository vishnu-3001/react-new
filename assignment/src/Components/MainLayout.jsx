import NavBar from "./NavBar/NavBar"
import classes from "./MainLayout.module.css"
import Patients from "./Patients/Patients"
import Profile from "./Profile/Profile"
import LabResults from "./LabResults/LabResults"
export default function MainLayout(){
    return(
        <div className={classes.mainLayout}>
            <NavBar />
            <div className={classes.content}>
                <Patients />
                <div className={classes.rightContainer}>
                    <Profile />
                    <LabResults />
                </div>
            </div>
        </div>
    )
}