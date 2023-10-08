import React from "react";
import Data from "./productData.json";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  // console.log(Data);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <ProductList data={Data} />
      </main>
    </div>
  );
}

export default App;
