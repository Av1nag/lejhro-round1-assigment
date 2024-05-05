import { Card, Row, Col, Container } from "react-bootstrap";
import "./BootcampAdvantage.styles.css"
export default function BootcampAdvantage() {
  return (
    <div
      style={{
        padding: "40px 100px",
        backgroundColor: "#3a3632",
      }}
    >
      <div className="cbs-main-div enterprise-field">
        <h2 style={{ fontWeight: "bold" }}> Lejhro Bootcamp Advantage</h2>
        <h6>
          Dedicated mentorship with staunch assistance to help you become an
          expert in the field
        </h6>
        <div className="d-flex justify-content-center">
          <Card
            className="text-center"
            style={{
              border: "0px",
              backgroundColor: "#3a3632",
              color: "#FFFF",
            }}
          >
            <Card.Body>
              <Container>
                <Row>
                  <Col style={{ padding: "30px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-briefcase"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                    </svg>{" "}
                    <h5>Skills for real career growth</h5> Cutting-edge
                    curriculum designed in guidance with industry and academia
                    to develop job-ready skills
                  </Col>
                  <Col style={{ padding: "30px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-bar-chart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                    </svg>{" "}
                    <h5>Learn from experts </h5> Leading practitioners who bring
                    current best practices and case studies to sessions that fit
                    into your work schedule
                  </Col>
                  <Col style={{ padding: "30px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-calendar3-event"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                      <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    <h5>Work on real world problems </h5>Capstone projects
                    involving real world data sets with virtual labs for
                    hands-on learning
                  </Col>{" "}
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
