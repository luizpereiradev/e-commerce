import CategorySection from "./category-section/CategorySection";
import OfferSection from "./offers-section/OfferSection";
import Recommended from "./recommended-section/Recommended";
import MainSection from "./main-section/MainSection";
import Form from "./form/Form";

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
