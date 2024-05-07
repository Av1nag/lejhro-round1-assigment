import { Button } from "react-bootstrap";
import "./BootcampEnterprise.styles.css"; // Linking the CSS file

export default function BootcampEnterprise() {
  return (
    <div className="cbs-main-div enterprise-field">
      <h2>Lejhro Bootcamp Enterprise</h2>
      <h6>Competent solutions curated towards achieving organizational success</h6>
      <Button size="lg" className="button-color" variant="danger">
        Explore
      </Button>
    </div>
  );
}
