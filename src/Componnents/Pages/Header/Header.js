import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar style={{ sticky: "top" }} bg="body" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Car<span className="logo_text">House</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto  my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <NavDropdown className="container" title="Login / Signup" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='/login' >Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/signup'>
                  Signup
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
