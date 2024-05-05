import { Navbar, Button, Nav, Offcanvas, Container } from "react-bootstrap";
import "./BootcampHeader.styles.css";
function BootCampHeader() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid className="bootcamp-header-child">
            <Navbar.Brand href="#">
              {" "}
              <img
                src="src/assets/lejhro_logo_white.png"
                className="lejhro-logo-primary"
              ></img>
            </Navbar.Brand>
            <Button size="lg" variant="outline-light">
              Programs
            </Button>{" "}
            {[
              "Programs",
              "Refer and Earn",
              "Free Masterclass",
              "Enterprise",
            ].map((index) => (
              <Button
                key={index}
                size="lg"
                className="button-color"
                variant="danger"
              >
                {index}
              </Button>
            ))}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              variant="light"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src="src/assets/lejhro_logo_red.png"
                    className="lejhro-logo-primary"
                  ></img>{" "}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Programs</Nav.Link>
                  <Nav.Link href="#action2">Refer and earn</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default BootCampHeader;
