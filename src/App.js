import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  // console.log(Data);
  // console.log(typeof(Data))
  const [searchKey, setSearchKey] = useState("");
  const handleSearch = (key) => {
    setSearchKey(key);
  };
  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <main className="main">
        <ProductList products={Data} searchKey={searchKey} />
      </main>
    </div>
  );
}

export default App;
