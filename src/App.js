import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import { Routes, Route } from "react-router-dom";

function App() {
  // console.log(typeof(Data))
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const [filteredProducts, setFilteredProducts] = useState(Data);
  return (
    <div className="app">
      <Header products={Data} setFilteredProducts={setFilteredProducts} />

      <main className="main">
    
          <ProductList
            filteredProducts={filteredProducts}
            selectedProduct={selectedProduct}
            onSelectproduct={handleProductClick}
          />

      </main>
    </div>
  );
}

export default App;
