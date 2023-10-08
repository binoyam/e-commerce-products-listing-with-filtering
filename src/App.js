import React from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  // console.log(Data);
  // console.log(typeof(Data))
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ProductList products={Data} />
      </main>
    </div>
  );
}

export default App;
