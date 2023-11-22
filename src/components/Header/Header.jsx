
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>    <>
    <Navbar expand="lg" className="bg-body-tertiary">
<Container>


 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="me-auto ">
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/admin">Admin</Link>

   </Nav>
 </Navbar.Collapse>
</Container>
</Navbar>
</></>
  )
}

export default Header