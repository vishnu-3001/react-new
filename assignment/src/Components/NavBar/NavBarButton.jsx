import classes from "./NavBarButton.module.css"
export default function NavBarButton({text,src}){
    return(
        <div className="">
            <span>
                <img src={src} alt={text}></img>
                {text}
            </span>
        </div>
    )
}