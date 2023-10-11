import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
// import { Routes, Route } from "react-router-dom";

function App() {
  // console.log(typeof(Data))
  const [selectedProduct, setSelectedProduct] = useState(null);

 
  const [filteredProducts, setFilteredProducts] = useState(Data);
  return (
    <div className="app">
      <Header products={Data} setFilteredProducts={setFilteredProducts} />

      <main className="main">
        {!selectedProduct ? (
          <ProductList
            filteredProducts={filteredProducts}
            selectedProduct={selectedProduct}
          />
        ) : (
          <Product selectedProduct={setSelectedProduct} />
        )}
      </main>
    </div>
  );
}

export default App;
