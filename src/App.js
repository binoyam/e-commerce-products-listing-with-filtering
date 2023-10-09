import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  // console.log(typeof(Data))
  const [filteredProducts, setFilteredProducts] = useState(Data);
  return (
    <div className="app">
      <Header products={Data} setFilteredProducts={setFilteredProducts} />

      <main className="main">
        <Routes>
          <Route
            path="/fullpage"
            element={<ProductList filteredProducts={filteredProducts} />}
          />
          <Route path="product-detail" element={<ProductDetail product={filteredProducts} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
