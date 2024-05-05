import { Card, Container, Row, Col } from "react-bootstrap";
import "./LejhroAchievements.styles.css";

export default function LejhroAchievements() {
  return (
    <div className="d-grid">
      <div className="achievements-container">
        <Card className="text-center achievements-card">
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <h6>72%</h6> Avg. CTC Hike
                </Col>
                <Col>
                  <h6>Top 1%</h6> Industry Instructors
                </Col>
                <Col>
                  <h6>2,00,000+ </h6>Career Transitions
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
      <h2 className="title">We Have Something For You!</h2>

      <Container>
        <Row>
          <Col className="masterclass-col">
            <h3 className="free-text">FREE</h3>
            <h4 className="masterclass-text">MASTER CLASS</h4>
          </Col>
          <Col className="masterclass-description-col">
            <h4 className="description-text">
              Discover to quickly get on the fast-track path to success that
              leave you
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
