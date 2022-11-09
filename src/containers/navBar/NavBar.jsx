import React from 'react';
import './navBar.css';

import { Link } from 'react-router-dom';
import App from '../../App';
import Company from '../company/Company';
import Techpage from '../techPage/Techpage';
// import Career from '../career/Career';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="#home"><Link to='/' element={<App/>} style={{ textDecoration: 'none', color: 'white' }}>Neulpum</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"><Link to='/' element={<App/>} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Nav.Link>
            <Nav.Link href="#company"><Link to='/company' element={<Company/>} style={{ textDecoration: 'none' , color: 'white' }}>Company</Link></Nav.Link>
            <Nav.Link href="#tech"><Link to='/techpage' element={<Techpage/>} style={{ textDecoration: 'none' , color: 'white'}}>Technology</Link></Nav.Link>
            {/* <Nav.Link href="#career"><Link to='career' element={<Career/>}>Career</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;