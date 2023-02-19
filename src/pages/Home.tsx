import CategorySection from "../components/category-section/CategorySection";
import OfferSection from "../components/offers-section/OfferSection";
import Recommended from "../components/recommended-section/Recommended";
import MainSection from "../components/main-section/MainSection";

function Home() {
  return (
    <>
      <MainSection />
      <OfferSection />
      <CategorySection />
      <CategorySection />
      <Recommended />
    </>
  );
}

export default Home;
