import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingout = () => {
    signOut(auth)
  }

  return (
    <div>
      
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="home">HOME</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   


    
    <Nav>
    
    <Nav.Link as={Link} to="blog">BLOG</Nav.Link>
    
     {
     
       user ?


       <Nav className="me-auto">
       <Nav.Link as={Link} to="manage">Manage</Nav.Link>
       <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
      <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>

      <button className='btn btn-link text-white text-decoration-none' onClick={handleSingout}>SING OUT</button>
     
     </Nav>



     
      
       :
       <Nav.Link as={Link} to="login">
       LOGIN
     </Nav.Link>
     }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  );
};

export default Header;