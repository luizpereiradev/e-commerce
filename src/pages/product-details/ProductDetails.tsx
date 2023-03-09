import Main from "./main/Main";
import Tabs from "./tabs/Tabs";
import { useParams } from "react-router-dom";
import { getProductFromId } from "../../services/categories";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  // assync function
  const getProduct = async () => {
    if (!id) return;
    const product = await getProductFromId(id);
    setProduct(product);
    console.log(product);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (product) return (
    <section>
      <Main product={product} />
      <Tabs />
    </section>
  );
  return <div>Carregando...</div>;
}

export default ProductDetails;