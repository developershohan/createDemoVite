import { Link, Outlet } from "react-router-dom"
import "./Admin.scss"

const Admin = () => {
  return (
    <div>Admin
    
<div className="admin_container">
  <div className="admin_left_con">
    <ul>
      <li className=" admin_sub_link">
        <Link to="/blog">Blog</Link>
        <Link to="/post">post</Link>
        <Link to="/category">category</Link>
      </li>
    </ul>
  </div>
  <div className="admin_right_con">
    <Outlet/>
  </div>
</div>
    
    </div>
  )
}

export default Admin