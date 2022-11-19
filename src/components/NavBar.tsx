import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Features" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/counter">
              Counter (redux example)
            </NavDropdown.Item>
            <NavDropdown.Item href="#doesnt-exist-yet">
              Another feature
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
