import CategorySection from "./components/category-section/CategorySection";
import Header from "./components/header/Header";
import OfferSection from "./components/offers-section/OfferSection";
import Recommended from "./components/recommended-section/Recommended";
import MainSection from "./components/main-section/MainSection";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <>
      <Header>
        <MainSection />
        <OfferSection />
        <CategorySection category="MLB1055"/>
        <CategorySection />
        <Recommended />
      </Header>
    </>
  );
}

export default App;
