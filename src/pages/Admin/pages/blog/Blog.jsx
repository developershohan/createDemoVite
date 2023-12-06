import { useContext } from "react"
import msgContext from "../../../../context/MsgContext"


const Blog = () => {

  const {msg} = useContext(msgContext)

  return (
    <div>Blog


<h1>{msg}</h1>



    </div>
  )
}

export default Blog