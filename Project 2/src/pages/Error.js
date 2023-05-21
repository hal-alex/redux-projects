import { Link } from "react-router-dom"
import image from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={image} />
        <h4>Page not found</h4>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
