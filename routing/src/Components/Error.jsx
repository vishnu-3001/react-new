import MainNavigation from "./MainNavigation";
import classes from "./root.module.css"
export default function Error(){
    return(
        <div>
            <MainNavigation></MainNavigation>
            <main className={classes.main}>
            <p>Error occured</p>
            </main>
        </div>
    )
}