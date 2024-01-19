import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Therapies from "../pages/therapies/Therapies";
import Team from "../pages/team/Team";
import Contact from "../pages/contact/Contact";
import Therapy from "../pages/therapy/Therapy";
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
        path: '/therapy/:id',
        element: <Therapy />
    },
    {
        path: '/professional/:id',
        element: <Professional />
    }
]);

export default router;
