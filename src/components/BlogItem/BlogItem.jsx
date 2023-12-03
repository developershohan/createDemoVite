
import { Link } from "react-router-dom";

const BlogItem = ({item}) => {
  return (
    <div className="row shadow my-4 blog_container d-flex " >
    <div className="col-md-3">
        <img src={item.photo} alt="" className=" w-100 img-fluid " />
    </div>
    <div className="col-md-9 bg-black d-flex flex-column justify-content-center align-items-start text-light text-bg-info ">
        <h2>{item.name}</h2>
        <Link to={`${item.slug}`} className="btn btn-primary" href="#" role="button">
            Read More
        </Link>
    </div>
</div>
  )
}

export default BlogItem