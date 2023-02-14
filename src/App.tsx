import CategorySection from "./components/category-section/CategorySection";
import Header from "./components/header/Header";
import OfferSection from "./components/offers-section/OfferSection";

function App() {
  return (
    <Header>
      <OfferSection />
      <CategorySection />
    </Header>
  )
}

export default App;
