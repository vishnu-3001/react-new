import NavBar from "./NavBar/NavBar"
import classes from "./MainLayout.module.css"
import Patients from "./Patients/Patients"
export default function MainLayout(){
    return(
        <div className={classes.mainLayout}>
            <NavBar />
            <Patients />
        </div>
    )
}