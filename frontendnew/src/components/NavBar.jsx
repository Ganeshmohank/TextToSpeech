import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       {/* Center the Nav Links using justify-content-center */}
    //       <Nav className="justify-content-center w-100">
    //         <Nav.Link as={Link} to="/Step1">
    //           Step1
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/Step2">
    //           Step2
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav className="fixed bottom-0 left-0 right-0  p-4">
      <div className="container mb-2 mx-auto flex justify-center items-center">
        
      </div>
    </nav>
  );
};

export default NavBar;
