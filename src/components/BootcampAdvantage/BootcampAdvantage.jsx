import { Card, Row, Col, Container } from "react-bootstrap";
import "./BootcampAdvantage.styles.css";

export default function BootcampAdvantage() {
  return (
    <div className="cbs-main-div advantage-container">
      <h2 style={{ fontWeight: "bold" }}> Lejhro Bootcamp Advantage</h2>
      <h6>
        Dedicated mentorship with staunch assistance to help you become an
        expert in the field
      </h6>
      <div className="d-flex justify-content-center">
        <Card className="text-center">
          <Card.Body className="advantages-body">
            <Container>
              <Row>
                <Col>
                  <img
                    src="images/brief_case.svg"
                    className="bi bi-briefcase"
                    alt="briefcase"
                  />
                  <h5>Skills for real career growth</h5>
                  Cutting-edge curriculum designed in guidance with industry and
                  academia to develop job-ready skills
                </Col>
                <Col>
                  <img className="bi bi-bar-chart" src="images/bar_graph.svg" />
                  <h5>Learn from experts </h5>
                  Leading practitioners who bring current best practices and
                  case studies to sessions that fit into your work schedule
                </Col>
                <Col>
                  <img
                    className="bi bi-calendar3-event"
                    src="images/calender_event.svg"
                  />
                  <h5>Work on real world problems </h5>
                  Capstone projects involving real world data sets with virtual
                  labs for hands-on learning
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
