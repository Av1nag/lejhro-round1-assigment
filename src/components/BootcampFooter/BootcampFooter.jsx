// BootcampFooter.jsx

import { Row, Col } from "react-bootstrap";
import "./BootcampFooter.styles.css";

export default function BootcampFooter() {
  return (
    <>
      <div className="footer-container">
        <Row className="footer-section">
          <Col lg={3}>
            <h3 className="footer-sub-heading">Company</h3>
            <div className="d-grid footer-links">
              <a href="/data-science-course-training">About </a>
              <a href="/data-analyst-course-training">Blogs</a>
              <a href="/full-stack-development-course-training">Enterprise</a>
              <a href="/digital-marketing-course-training">Lejhro Recruiter</a>
            </div>
          </Col>
          <Col lg={3}>
            <h3 className="footer-sub-heading">Support</h3>
            <div className="d-grid footer-links">
              <a href="/data-science-course-training">About </a>
              <a href="/data-analyst-course-training">Blogs</a>
              <a href="/full-stack-development-course-training">Enterprise</a>
              <a href="/digital-marketing-course-training">Lejhro Recruiter</a>
            </div>
          </Col>
          <Col lg={3}>
            <h3 className="footer-sub-heading">Company</h3>
            <div className="d-grid footer-links">
              <a href="/data-science-course-training">About </a>
              <a href="/data-analyst-course-training">Blogs</a>
              <a href="/full-stack-development-course-training">Enterprise</a>
              <a href="/digital-marketing-course-training">Lejhro Recruiter</a>
            </div>
          </Col>
        </Row>
        <h3 className="footer-sub-heading"> Boot camp</h3>
        <div className="d-grid footer-content">
          <a href="/data-science-course-training">Data Science Bootcamp</a>
          <a href="/data-analyst-course-training">Data Analyst Bootcamp</a>
          <a href="/full-stack-development-course-training">
            Full Stack Development Bootcamp
          </a>
          <a href="/digital-marketing-course-training">
            Digital Marketing Bootcamp
          </a>
        </div>
        <h3 className="footer-heading">Transform Yourself with Lejhro</h3>
        <h6 className="footer-sub-heading">
          Ushering The Era of Upskilling Back
        </h6>
        <p className="footer-content-no-border">
          In 2013, Lejhro&apos;s founders noticed that the professional world,
          due to the fast-paced era today, demanded industry professionals to
          upskill continuously by keeping themselves up to date with current
          technology - not just for their company’s growth but also for their
          personal career goals as well. With cut-throat competition for jobs
          and increasing unemployment coupled with outdated education of
          workers, upskilling oneself is the only way to ensure one’s growth and
          stability. Formerly, learning would come to a halt after attaining
          one’s degree. It was Lejhro&apos; s innovative approach towards
          imparting learning through Bootcamps curated especially for working
          professionals and programs that brought about a change in the industry
          practices and pushed people to upskill themselves. We, at Lejhro, have
          always strived to impart quality and world-class education to the
          workforce through pioneering courses to make them job-ready.
        </p>
        <h6 className="footer-sub-heading">
          A Flexible and Futuristic Approach
        </h6>
        <p className="footer-content-no-border">
          From the inception, teaching, and upskilling of a huge set of
          professionals and students alike Lejhro has come a long way. All
          thanks to its approach of staying future-ready and being ahead of its
          competitors by divulging an era of quality courses to upskill oneself.
          This approach has not only helped us to expand our horizons but has
          also helped us form a family of people with an ever-learning approach.
          Our aim to cater to various segments of working professionals
          according to their requirements has brought positive and impactful
          results and helped Lejhro carve its own place in the ed-tech industry.
          Only onwards and upwards from here!
        </p>
        <h6 className="footer-sub-heading">Growth - The Only Constant</h6>
        <p className="footer-content-no-border">
          We can proudly say that if it’s something that has been the same in
          all these years is our growth as well as the growth of those who are
          associated with us. We as an organization have always strived to go
          above and beyond our current capabilities and bring out-of-the-box
          innovations to the table in order to make the lives of working
          professionals and students all the easier by upskilling them to make
          them job-ready. Join us in this revolution of ours and together we can
          transform more and more lives!
        </p>
        <p className="text-center p mx-auto mt-3">
          © 2024 LEJHRO. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
