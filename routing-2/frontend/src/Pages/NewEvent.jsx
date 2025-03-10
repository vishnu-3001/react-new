import EventForm from "../components/EventForm"
import EventsNavigation from "../components/EventsNavigation"
export default function NewEvent(){
    return(
        <div>
            <EventsNavigation></EventsNavigation>
            <EventForm></EventForm>
        </div>
    )
}

export async function action({request,params}){
    const data=request.formData();
    const eventData={
        title:data.get('title'),
        image:data.get('image'),
        date:data.get('date'),
        description:data.get('description')
    }
    const response=await fetch("http://localhost:8080/events",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(eventData)
    })
    if (!response.ok) {
        throw new Response(
            JSON.stringify({ message: "Could not save the details" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
    
}