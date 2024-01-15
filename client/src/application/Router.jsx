import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Terapies from "../pages/terapies/Terapies";
import Team from "../pages/team/Team";

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
]);

export default router;
