import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/product-details/ProductDetails"

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductDetails />} path="/details/:id" />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
