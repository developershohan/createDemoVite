import { Link, Outlet, useLocation } from "react-router-dom";
import "./Admin.scss";
import { checkPath } from "../../helper/Helper";

const Admin = () => {
	const location = useLocation();

	return (
		<div>
			Admin
			<div className="admin_container">
				<div className="admin_left_con">
					<ul>
						<li className=" admin_sub_link">
							<Link
								to="blog"
								className={
									checkPath(location.pathname, "blog") ? "active" : ""
								}>
								Blog
							</Link>
							<Link
								to="post"
								className={
									checkPath(location.pathname, "post") ? "active" : ""
								}>
								post
							</Link>
							<Link
								to="category"
								className={
									checkPath(location.pathname, "category") ? "active" : ""
								}>
								category
							</Link>
						</li>
					</ul>
				</div>
				<div className="admin_right_con">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Admin;
