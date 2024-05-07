import { Stack, Button } from "react-bootstrap";
import BookingForm from "../BookingForm/BookingForm";
import "./FeaturingComponent.styles.css";
const FeaturingComponent = () => {
  return (
      <Stack gap={5} className="cbs-main-div featuring-component-class">
        <h1 className="display-5 text-white">
          Industry&apos;s #1 Online Bootcamp
        </h1>
          <picture>
            <source srcSet="images/image.webp" type="image/webp" />
            <source srcSet="images/image.jpg" type="image/jpeg" />
            <img src="images/image.jpg" />
          </picture>
        <Button
          size="lg"
          className="bootcamp-explore-button"
          variant="outline-light"
        >
          Explore
        </Button>
        <BookingForm />
      </Stack>
  );
};
export default FeaturingComponent;
