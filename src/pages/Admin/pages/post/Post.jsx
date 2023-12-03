import "./Post.scss";
import { blog } from "../../../../faker/db";
import BlogItem from "../../../../components/BlogItem/BlogItem";

const Post = () => {
	return (
		<div>
			<div className="container">
				{blog.map((item, index) => {
					return <BlogItem item={item} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Post;
