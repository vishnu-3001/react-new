export default function Section(props){
    return(
        <section id={props.id}>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}