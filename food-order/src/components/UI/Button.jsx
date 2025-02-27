export default function Button({children,className,textOnly,...props}){
    let cssClasses=textOnly?'text-button':'button';
    cssClasses+=' '+className;
    return (
            <button className={cssClasses} {...props}>{children}</button>
    )
}