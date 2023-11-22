import Layout from "../components/Layout/Layout"
import Admin from "../pages/Admin/Admin"

const privateRouter = [{
    element: <Layout/>,
    children: [{
        path: "/admin",
        element: <Admin/>
    }]
}]

export default privateRouter