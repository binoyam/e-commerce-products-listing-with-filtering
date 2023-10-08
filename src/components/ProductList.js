import React from "react";
import Product from "./Product";

function ProductList({ filteredProducts }) {
  //   console.log(products);

  return (
    <>
      {filteredProducts.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
}

export default ProductList;
