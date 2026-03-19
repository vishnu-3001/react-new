import NavBar from "./NavBar/NavBar"
import classes from "./MainLayout.module.css"
import Patients from "./Patients/Patients"
import Profile from "./Profile/Profile"
import LabResults from "./LabResults/LabResults"
import DiagnosticList from "./DiagnosticList/DiagnosticList"
export default function MainLayout(){
    return(
        <div className={classes.mainLayout}>
            <NavBar />
            <div className={classes.content}>
                <div className={classes.leftContainer}>
                    <Patients />
                </div>
                <div className={classes.centerContainer}>
                    <DiagnosticList />
                </div>
                <div className={classes.rightContainer}>
                    <Profile />
                    <LabResults />
                </div>
            </div>
        </div>
    )
}