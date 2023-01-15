import { createBrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Artist from "./routes/Artist";
import Concert from "./routes/Concert";
import Contact from "./routes/Contact";
import Education from "./routes/Education";
import Login from "./routes/Login";
import MainPage from "./routes/MainPage";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "artist",
    element: <Artist />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "education",
    element: <Education />,
  },
  //
  {
    path: "concert",
    element: <Concert />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
