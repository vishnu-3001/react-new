import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const fetchedEvents=useLoaderData()
  return (
    <>
       <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        throw new Response(JSON.stringify({message:"An error occured"}),{status:500});
      } else {
        const resData = await response.json();
        return resData.events;
      }
}