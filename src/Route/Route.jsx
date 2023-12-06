import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginRegistration/Login";

import VolunteerList from "../pages/Admin/VolunteerList";
import AddEvent from "../pages/Admin/AddEvent";
import PrivateAuth from "../PriveAuth/PrivateAuth";
import Apply from "../pages/LoginRegistration/Apply";
import Applyed from "../pages/UserProfile/Applyed";
import Donate from "../pages/Donation/Donate";
import Events from "../pages/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "volunteerlist",
        element: <VolunteerList />,
        loader: () =>
          fetch(
            "https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/allVolunteers"
          ),
      },
      {
        path: "addevent",
        element: (
          <PrivateAuth>
            <AddEvent />
          </PrivateAuth>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Login />,
  },
  {
    path: "/apply/:id",
    element: <Apply />,
    loader: ({ params }) =>
      fetch(
        `https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/events/${params.id}`
      ),
  },
  {
    path: "applyed",
    element: <Applyed />,
  },
  {
    path: "donate",
    element: <Donate />,
  },
  {
    path: "events",
    element: <Events />,
  },
]);

export default router;
