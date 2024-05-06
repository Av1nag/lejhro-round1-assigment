import { Stack, Button } from "react-bootstrap";
import BookingForm from "../BookingForm/BookingForm";
import "./FeaturingComponent.styles.css";
const FeaturingComponent = () => {
  return (
    <div className="cbs-main-div">
      <Stack gap={5} className="featuring-component-class">
        <h1 className="display-5 text-white">
          Industry&apos;s #1 Online Bootcamp
        </h1>
        <img src="images/image.webp"></img>
        <Button
          size="lg"
          className="bootcamp-explore-button"
          variant="outline-light"
        >
          Explore
        </Button>
        <BookingForm />
      </Stack>
    </div>
  );
};
export default FeaturingComponent;
