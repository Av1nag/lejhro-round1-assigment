import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./BookingForm.styles.css";

export default function BookingForm() {
  return (
    <>
      <Card className="booking-form-card">
        <h3 className="booking-form-title">
          Book a <b>FREE</b> Live Class!
        </h3>
        <Form>
          <Container>
            <Row style={{ marginBottom: "10px"}}>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>FIRST NAME</Form.Label>
                  <Form.Control
                    className="booking-form-field"
                    type="name"
                    placeholder="Enter First name"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>LAST NAME</Form.Label>
                  <Form.Control
                    className="booking-form-field"
                    type="name"
                    placeholder="Enter Last name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row md={6} style={{ marginBottom: "10px" }}>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                  <Form.Label>PHONE NUMBER</Form.Label>
                  <Form.Control
                    className="booking-form-field"
                    type="Phnumber"
                    placeholder="Enter Phone Number"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>EMAIL</Form.Label>
                  <Form.Control
                    className="booking-form-field"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>YEARS OF EXPERIENCE</Form.Label>
              <Form.Control
                className="booking-form-field"
                type="text"
                placeholder="Enter Years of experience"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
              <div className="d-flex justify-content-center">
            <Button
              size="xs"
              variant="primary"
              type="submit"
              className="booking-form-button"
            >
              continue booking live classes
            </Button>
          </div>
          </Container>

        
          <div className="d-flex justify-content-center">
            <img
              className="img-responsive"
              src="images/avatar_of_three.svg"
            />
            <span className="booking-form-message-icon">
              Limited seats left
            </span>
          </div>
        </Form>
      </Card>
    </>
  );
}
