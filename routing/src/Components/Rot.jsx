import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"
import classes from "./root.module.css"
export default function RootLayout(){
    return(
        <div>
            <MainNavigation></MainNavigation>
            <main className={classes.content}>
            <Outlet></Outlet>
            </main>
        </div>
    )
}
