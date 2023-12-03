import Layout from "../components/Layout/Layout";
import Admin from "../pages/Admin/Admin";
import Post from "../pages/Admin/pages/Post/Post";
import Blog from "../pages/Admin/pages/blog/Blog";
import Category from "../pages/Admin/pages/category/Category";




const privateRouter = [
	{
		element: <Layout />,
		children: [
			{
				path: "/admin",
				element: <Admin />,
				children: [
					{
						path: "blog",
						element: <Blog />,
					},
					{
						path: "post",
						element: <Post />,
					},
					{
						path: "category",
						element: <Category />,
					},
				],
			},
		],
	},
];

export default privateRouter;
