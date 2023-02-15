import CategorySection from "./components/category-section/CategorySection";
import Header from "./components/header/Header";
import OfferSection from "./components/offers-section/OfferSection";
import Recommended from "./components/recommended-section/Recommended";
import MainSection from "./components/main-section/MainSection";

function App() {
  return (
    <Header>
      <MainSection/>
      <OfferSection />
      <CategorySection />
      <CategorySection />
      <Recommended />
    </Header>
  )
}

export default App;
