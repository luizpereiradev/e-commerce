import Main from "./main/Main";
import Tabs from "./tabs/Tabs";
import { useParams } from "react-router-dom";
import { getProductFromId } from "../../services/categories";
import { useEffect, useState } from "react";
import { product } from "../../types";
import Header from "../../components/header/Header";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<product>();

  const getProduct = async () => {
    if (!id) return;
    const product = await getProductFromId(id);
    setProduct(product);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (product)
    return (
      <Header>
        <section>
          <Main product={product} />
          <Tabs atributes={product.attributes} />
        </section>
      </Header>
    );
  return <div>Carregando...</div>;
}

export default ProductDetails;
