import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = (props) => {
  const { setListShow, setSearch } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Adres Defteri</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => setListShow(true)}>Liste</Nav.Link>
            <Nav.Link onClick={() => setListShow(false)}>+ Yeni</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="ara.."
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
