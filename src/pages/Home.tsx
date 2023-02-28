import CategorySection from "../components/category-section/CategorySection";
import OfferSection from "../components/offers-section/OfferSection";
import Recommended from "../components/recommended-section/Recommended";
import MainSection from "../components/main-section/MainSection";
import Form from "../components/form/Form";

function Home() {
  return (
    <>
      <MainSection />
      <OfferSection />
      <CategorySection placeholder="Celulares e Telefones" category="MLB1055" />
      <CategorySection placeholder="Eletrodomésticos" category="MLB5726" />
      <Form />
      <Recommended />
    </>
  );
}

export default Home;
