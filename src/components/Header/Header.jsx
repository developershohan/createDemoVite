
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import "./Header.scss"
import { checkPath } from '../../helper/Helper';
const Header = () => {


  const location = useLocation()

  return (
    <>    <>
    <Navbar expand="lg" className="bg-body-tertiary">
<Container>


 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="me-auto header_link">
     <Link to="/" className={location.pathname === "/" ? "active" : " " }>Home</Link>
     <Link to="/about" className={checkPath(location.pathname, "about") ? "active" : " " }>About</Link>
     <Link to="/admin" className={checkPath(location.pathname, "admin") ? "active" : " " }>Admin</Link>

   </Nav>
 </Navbar.Collapse>
</Container>
</Navbar>
</></>
  )
}

export default Header