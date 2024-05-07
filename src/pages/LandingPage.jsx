import AluminiDetails from "../components/AluminiDetails/AluminiDetails";
import BootcampAdvantage from "../components/BootcampAdvantage/BootcampAdvantage";
import FeaturingComponent from "../components/FeaturingComponent/FeaturingComponent";
import BootCampHeader from "../components/BootcampHeader/BootcampHeader";
import BootcampEnterprise from "../components/BootcampEnterprise/BootcampEnterprise";
import BootcampFooter from "../components/BootcampFooter/BootcampFooter";
import LejhroAchievements from "../components/LejhroAchievements/LejhroAchievements";
import MeetThePeople from "../components/MeetThePeople/MeetThePeople";
import "./LandingPage.styles.css"
export default function LandingPage() {
  return (
    <>
      <div className="landing-component-class">
        <BootCampHeader />
        <FeaturingComponent />
      </div>
      <div>
        <LejhroAchievements />
        <MeetThePeople />
      </div>
      <BootcampAdvantage />
      <AluminiDetails />
      <BootcampEnterprise />
      <BootcampFooter />
    </>
  );
}
