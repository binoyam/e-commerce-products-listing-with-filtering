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
            exact
            path="/"
            render={() => (
              <ProductList
                filteredProducts={filteredProducts}
                selectedProduct={selectedProduct}
              />
            )}
            element={
              <ProductList
                filteredProducts={filteredProducts}
                selectedProduct={selectedProduct}
              />
            }
          />
          <Route
            path="/products/:id"
            render={(props) => <Product {...props} products={Data} />}
            element={<Product products={Data} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
