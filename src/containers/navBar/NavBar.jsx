import React from 'react';
import './navBar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">NP Corp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Company</Nav.Link>
            <NavDropdown title="Solution" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tech1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tech2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tech3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tech4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Tech5</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Tech6</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Tech7</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Tech8</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="#link">Careers</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;