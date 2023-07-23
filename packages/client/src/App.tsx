import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/product-details/ProductDetails";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/details/:id" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
