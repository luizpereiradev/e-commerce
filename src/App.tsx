import CategorySection from "./components/category-section/CategorySection";
import Header from "./components/header/Header";
import OfferSection from "./components/offers-section/OfferSection";
import Recommended from "./components/recommended-section/Recommended";
import MainSection from "./components/main-section/MainSection";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <Header>
        <MainSection />
        <OfferSection />
        <CategorySection placeholder="Celulares e Telefones" category="MLB1055"/>
        <CategorySection placeholder="Eletrodomésticos" category="MLB5726" />
        <Form />
        <Recommended />
      </Header>
    </>
  );
}

export default App;
