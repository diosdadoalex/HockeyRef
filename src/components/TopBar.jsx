import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles.css";
import Nav from "react-bootstrap/Nav";

function TopBar() {
  return (
    <>
      <Navbar bg="lightgrey">
        <Navbar.Brand>
          <img
            src="https://content.sportslogos.net/logos/1/491/full/wkue6hfkzqs2bnl0efw8sihf7.png"
            width="30px"
            height="30px"
          />
          Hockey Resource
        </Navbar.Brand>
        <Navbar.Collapse className="right-aligned">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="teams">Teams</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopBar;
