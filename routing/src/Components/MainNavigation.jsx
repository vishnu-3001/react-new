import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"
export default function MainNavigation(){
    return(
        <div>
            <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li>
                            <NavLink to="/" className={({isActive})=>isActive?classes.active:undefined} end>Home</NavLink>
                            <NavLink to="/products"className={({isActive})=>isActive?classes.active:undefined}>Products</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}