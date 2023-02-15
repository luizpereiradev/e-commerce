import CategorySection from "./components/category-section/CategorySection";
import Header from "./components/header/Header";
import OfferSection from "./components/offers-section/OfferSection";
import Recommended from "./components/recommended-section/Recommended";

function App() {
  return (
    <Header>
      <OfferSection />
      <CategorySection />
      <Recommended />
    </Header>
  )
}

export default App;
