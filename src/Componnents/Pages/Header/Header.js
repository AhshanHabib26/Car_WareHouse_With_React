import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar style={{sticky: "top"}} bg="body" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to='/' >Car<span className="logo_text">House</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto  my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
