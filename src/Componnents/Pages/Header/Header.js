import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase_init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

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

              {user && (
                <>
                  <Nav.Link as={Link} to="/all_car_list">
                    Car List
                  </Nav.Link>
                  <Nav.Link as={Link} to="/my-items">
                    My Items 
                  </Nav.Link>
                </>
              )}

              {user ? (
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              ) : (
                <NavDropdown
                  title="Login / Signup"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signup">
                    Signup
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
