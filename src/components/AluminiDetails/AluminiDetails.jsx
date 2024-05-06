import { Stack, Row, Col } from "react-bootstrap";
import "./AluminiDetails.styles.css";

export default function AluminiDetails() {
  return (
    <div className="cbs-main-div">
      <div className="cbs-main-div d-flex justify-content-center">
        <h2 className="text-black">Where Our Alumni Work</h2>
      </div>
      <Stack gap={2} className="col-md-5 mx-auto">
        {[1, 3, 5, 7, 9].map((index) => (
          <Row
            key={index}
            className="align-items-center justify-content-center"
          >
            <Col md={6} className="mb-10 text-center">
              <img
                src={`images/p${index}.svg`}
                alt=""
                className="img-fluid"
              />
            </Col>
            {index != 9 && (
              <Col md={6} className="mb-10 text-center">
                <img
                  src={`images/p${index + 1}.svg`}
                  alt=""
                  className="img-fluid"
                />
              </Col>
            )}
          </Row>
        ))}
        <p className="p mx-auto mt-3">
          and <b>500+</b> companies
        </p>
      </Stack>
    </div>
  );
}
