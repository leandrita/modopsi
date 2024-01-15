import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Terapies from "../pages/terapies/Terapies";
import Team from "../pages/team/Team";
import Contact from "../pages/contact/Contact";
import AdultTerapy from "../pages/adult-terapy/AdultTerapy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/terapies',
        element: <Terapies />
    },
    {
        path: '/team',
        element: <Team />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/adult-terapy',
        element: <AdultTerapy />
    }
]);

export default router;
