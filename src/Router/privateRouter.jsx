import Layout from "../components/Layout/Layout"
import Admin from "../pages/Admin/Admin"
import Blog from "../pages/Admin/pages/blog/Blog"


const privateRouter = [{
    element: <Layout/>,
    children: [{
        path: "/admin",
        element: <Admin/>,
        children:[
{
    path: "/blog",
    element: <Blog/>,
}
        ]
    }]
}]

export default privateRouter