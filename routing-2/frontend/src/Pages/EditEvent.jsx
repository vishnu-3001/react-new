import EventForm from "../components/EventForm"
import { useLoaderData } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation";
export default function EditEvent(){
    const data=useLoaderData();
    return(
        <div>
            <EventsNavigation></EventsNavigation>
            <EventForm event={data.event}></EventForm>
        </div>
    )
}