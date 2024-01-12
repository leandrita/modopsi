import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Terapies from "../pages/terapies/Terapies";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/terapies',
        element: <Terapies />
    },
]);

export default router;
