import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState(Data);
  return (
    <div className="app">
      <Header products={Data} setFilteredProducts={setFilteredProducts} />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                filteredProducts={filteredProducts}
                selectedProduct={selectedProduct}
              />
            }
          />
          <Route
            path="/product-detail/:id"
            element={<Product selectedProduct={selectedProduct} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
