import React, { useState } from "react";
import "./App.css";
import Data from "./productData.json";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./components/NewPage";

function App() {
  // console.log(typeof(Data))
  const [filteredProducts, setFilteredProducts] = useState(Data);
  return (
    <BrowserRouter>
      <div className="app">
        <Header products={Data} setFilteredProducts={setFilteredProducts} />

        <main className="main">
          <Routes>
            <Route
              path="/fullpage"
              element={<ProductList filteredProducts={filteredProducts} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
