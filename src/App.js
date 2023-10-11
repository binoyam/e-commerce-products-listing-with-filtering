import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
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
