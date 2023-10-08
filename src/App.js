import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  // console.log(Data);
  // console.log(typeof(Data))
  const [filteredProducts, setFilteredProducts] = useState(Data);
  return (
    <div className="app">
      <Header products={Data} setFilteredProducts={setFilteredProducts} />
      <main className="main">
        <ProductList filteredProducts={filteredProducts}  />
      </main>
    </div>
  );
}

export default App;
