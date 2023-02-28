import Main from "./main/Main";
import Tabs from "./tabs/Tabs";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <section>
      <Main />
      <Tabs />
    </section>
  );
}

export default ProductDetails;