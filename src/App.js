import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./layouts/products/list/ProductsList";
import ProductsForm from "./layouts/products/add-edit/forms/ProductsForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/listado-productos" element={<ProductsList />} />
          <Route path="/agregar-producto" element={<ProductsForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
