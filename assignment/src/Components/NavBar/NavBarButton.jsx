import classes from "./NavBarButton.module.css"
export default function NavBarButton({text,src}){
    return(
        <div>
            <span className={classes.navButton}>
                <img src={src} alt={text} className={classes.buttonIcon}></img>
                {text}
            </span>
        </div>
    )
}