import { createBrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Artist from "./routes/Artist";
import Concert from "./routes/Concert";
import Education from "./routes/Education";
import Login from "./routes/Login";
import MainPage from "./routes/MainPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "artist",
        element: <Artist />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "education",
        element: <Education />
    },
    // 
    {
        path: "concert",
        element: <Concert />
    }
])

export default router;