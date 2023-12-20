import React from 'react'
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';


const NavBar = () => {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mantarralla</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#collares">Collares</Nav.Link>
            <Nav.Link href="#pulseras">Pulseras</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#cart">
            <CartWidget/>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
