import NavBar from "./NavBar/NavBar"
import classes from "./MainLayout.module.css"
import Patients from "./Patients/Patients"
import Profile from "./Profile/Profile"
export default function MainLayout(){
    return(
        <div className={classes.mainLayout}>
            <NavBar />
            <div className={classes.content}>
                <Patients />
                <Profile />
            </div>
        </div>
    )
}