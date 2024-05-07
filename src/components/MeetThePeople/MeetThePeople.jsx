import { Carousel, Card } from "react-bootstrap";
import "./MeetThePeople.styles.css";

export default function MeetThePeople() {
  return (
    <div>
      <div className="cbs-main-div d-flex justify-content-center meet-people-container">
        <h2 style={{ fontWeight: "bold" }} className="display-5 text-black">
          Meet the people who made it to the top companies
        </h2>{" "}
      </div>

      <div className="pb-5">
        <Carousel data-bs-theme="dark" className="carousel-container">
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="meet-people-card">
                <Card.Body>
                  <h3>Java Full Stack Bootcamp</h3>
                  I heard about Lejhro from a friend and enrolled in its Full stack Development Bootcamp, what followed was an immersive learning experience that helped me transform my career.
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="meet-people-card">
                <Card.Body>
                  <h3>Java Full Stack Bootcamp</h3>
                  I heard about Lejhro from a friend and enrolled in its Full stack Development Bootcamp, what followed was an immersive learning experience that helped me transform my career.
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="meet-people-card">
                <Card.Body>
                  <h3>Java Full Stack Bootcamp</h3>
                  I heard about Lejhro from a friend and enrolled in its Full stack Development Bootcamp, what followed was an immersive learning experience that helped me transform my career.
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="meet-people-card">
                <Card.Body>
                  <h3>Java Full Stack Bootcamp</h3>
                  I heard about Lejhro from a friend and enrolled in its Full stack Development Bootcamp, what followed was an immersive learning experience that helped me transform my career.
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
