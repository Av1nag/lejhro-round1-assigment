import { Button } from "react-bootstrap";

export default function BootcampEnterprise() {
  return (
    <div
      style={{
        padding: "40px 150px",
        backgroundColor: "#3a3632",
        borderBottom: "10px solid #dd3b30 ",
      }}
    >
      <div className="cbs-main-div enterprise-field">
        <h2 style={{ fontWeight: "bold" }}> Lejhro Bootcamp Enterprise</h2>
        <h6>
          Competent solutions curated towards achieving organizational success
        </h6>
        <Button
          size="lg"
          className="button-color"
          variant="danger"
          style={{ marginTop: "20px", borderRadius: "0px" }}
        >
          Explore{" "}
        </Button>{" "}
      </div>
    </div>
  );
}
