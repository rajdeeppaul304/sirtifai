import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import  FeaturedLearnerStories from "../../components/sections/FeaturedLearnerStories";
import  IncomeTrackerWall from "../../components/sections/IncomeTrackerWall";
import SuccessGallery from "../../components/sections/SuccessGallery";
import UpcomingWebinars from "../../components/sections/UpcomingWebinars";
import CampusActivities from "../../components/sections/CampusActivities";
import FooterCTA from "../../components/sections/FooterCta";

export default function MediaCampaignPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <FeaturedLearnerStories />
      <IncomeTrackerWall />
      <SuccessGallery />
      <UpcomingWebinars />
      <CampusActivities />
      <FooterCTA />
      <Footer />
    </div>
  )
}
