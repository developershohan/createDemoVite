import Layout from "../components/Layout/Layout"
import About from "../pages/About/About"
import Home from "../pages/Home/Home"

const publicRouter = [{
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
}]

export default publicRouter