import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const Menu = ({user}) => {
  
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo.jpg" id="logo" alt="Local Food Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">                
                <Nav.Link>Forsiden</Nav.Link>
              </LinkContainer>
              {user && user.access === "admin" && <LinkContainer to="/sellers">
                  <Nav.Link>Forhandlere</Nav.Link>
                </LinkContainer>
              }
              <NavDropdown title="Flere menupunkter" id="basic-nav-dropdown">
                {!user && <NavDropdown.Item href="/login">Login</NavDropdown.Item>}
                {!user && <NavDropdown.Item href="/register">Opret brugerkonto</NavDropdown.Item>}
                {user && <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>}
                {user && user.access === "admin" && <NavDropdown.Item href="/users">Brugere</NavDropdown.Item>}
                
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


export default Menu;
