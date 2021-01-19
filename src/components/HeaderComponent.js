import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

function HeaderComponent(props) {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Scott R. Doyen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#pricing">About Me</Nav.Link>
                <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Food Truck Finder</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Calorie Tracker</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="https://github.com/srdoyen">Github</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
     
      </>
    );
}

export default HeaderComponent;