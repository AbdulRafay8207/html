import { createBrowserRouter } from "react-router";
import AppLayout from "../components/AppLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
    {
    path: "/",
    element: <Home/>
    },
    {
    path:'about',
    element: <About/>
    },
    {
    path:'contact',
    element: <Contact/>
    }
]
  },
  
]);
export default router