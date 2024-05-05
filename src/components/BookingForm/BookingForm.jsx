import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./BookingForm.styles.css"
export default function BookingForm() {
  return (
    <>
      <Card style={{ width: "100%", padding: "20px" }}>
        <h3 style={{ textAlign: "center" }}>
          Book a <b>FREE</b> Live Class!
        </h3>
        <Form>
          <Container>
            <Row>
              <Col md={6} style={{ marginBottom: "10px" }}>
                {" "}
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
              <Col md={6} style={{ marginBottom: "10px" }}>
                {" "}
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
            <Row>
              <Col md={6} style={{ marginBottom: "10px" }}>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                  <Form.Label>PHONE NUMBER</Form.Label>
                  <Form.Control
                    className="booking-form-field"
                    type="Pnumber"
                    placeholder="Enter Phone Number"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} style={{ marginBottom: "10px" }}>
                {" "}
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
          </Container>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            md={6}
            style={{ margin: "0px 10px 10px 10px" }}
          >
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
              style={{ margin: "10px" , backgroundColor: "#ffc107", border:"none"}}
            >
              continue booking live classes
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-[#dd3b30] mb-2"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z"></path>
              <path d="M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7zM372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z"></path>
            </svg>{" "}
            Limited seats left
          </div>
        </Form>
      </Card>
    </>
  );
}
