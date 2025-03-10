import EventItem from "../components/EventItem"
import { useLoaderData } from "react-router-dom";
export default function EventDetail(){
    const eventdetails=useLoaderData();
    return(
        <div>
            <EventItem event={eventdetails.event}></EventItem>
        </div>
    )
}

export async function loader({request,params}){
    const id=params.id
    const res= await fetch("http://localhost:8080/events/"+id);
    return res;
}