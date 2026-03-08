import NavBar from "./NavBar/NavBar"
import classes from "./MainLayout.module.css"
export default function MainLayout(){
    return(
        <div className={classes.mainLayout}>
            <NavBar />
        </div>
    )
}