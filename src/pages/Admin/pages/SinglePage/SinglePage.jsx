import { useParams } from "react-router-dom";
import { blog } from "../../../../faker/db";
import "./SinglePage.scss";

const SinglePage = () => {
	const { slug } = useParams();
	const singlePost = blog.find((data) => data.slug === slug);

	return (
		<div>
			<div className="container single_post_container">
				<div className="row d-flex flex-column align-items-start gap-3">
					<img src={singlePost.photo} alt="" className="single_post_image" />
                    <h2>{singlePost.name}</h2>
                    <p>{singlePost.content}</p>
				</div>
			</div>
		</div>
	);
};

export default SinglePage;
