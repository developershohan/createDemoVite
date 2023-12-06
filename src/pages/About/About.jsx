import { useState } from "react";
import "./About.scss";
const About = () => {

const [count, setCount] = useState(0)
const [msg, setMsg] = useState("hi")




	return (
		<div>
			About
			<div className="card text-left">
				<img className="card-img-top" src="holder.js/100px180/" alt="" />
				<div className="card-body">
					<h4 className="card-title">Title</h4>
					<h4 className="counter-value">{count}</h4>
					<div className="counter-btns d-flex gap-3 mt-3">
						<button type="button" className="btn btn-success" onClick={()=>
              setCount((prevState)=> prevState + 1)
            }>
							++
						</button>
						<button type="button" className="btn btn-info text-light " onClick={()=> setCount(0)}>
							Reset
						</button>
						<button type="button" className="btn btn-danger" onClick={()=> count > 0 ? setCount((prevState)=> prevState - 1): setCount(0) }>
							--
						</button>
					</div>
				</div>
			</div>

			<div className="card">
				<img className="card-img-top" src="holder.js/100x180/" alt=""/>
				<div className="card-body">
					<h4 className="card-title">{msg}</h4>

					<input type="text" onChange={(e)=> setMsg(e.target.value)}/>

				</div>
			</div>
		</div>
	);
};

export default About;
