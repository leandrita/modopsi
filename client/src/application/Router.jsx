import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Therapies from "../pages/therapies/Therapies";
import Team from "../pages/team/Team";
import Contact from "../pages/contact/Contact";
import AdultTerapy from "../pages/adult-terapy/AdultTerapy";
import Professional from "../pages/professional/Professional";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/therapies',
        element: <Therapies />
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
    },
    {
        path: '/professional',
        element: <Professional />
    }
]);

export default router;
