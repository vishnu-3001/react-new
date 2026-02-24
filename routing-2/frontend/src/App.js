// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Events,{loader as eventLoader} from "./Pages/Events";
import Root from "./Pages/Root";
import NewEvent,{action as newEventAction} from "./Pages/NewEvent";
import EventDetail,{loader as eventDetailLoader} from "./Pages/EventDetail";
import EditEvent from "./Pages/EditEvent";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error></Error>,
    children: [
      {index:true,element:<Home></Home>},
      {path: "events",element: <Events />,loader:eventLoader},
          { path: "/events/new", element: <NewEvent />,action:newEventAction },
          { path: "/events/:id", element: <EventDetail />, loader:eventDetailLoader},
          { path: "/events/:id/edit", element: <EditEvent /> ,loader:eventDetailLoader}

    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
