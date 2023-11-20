import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter([
{
    element: <Layout/>,
    children :[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        }
    ]
}
])

export default router