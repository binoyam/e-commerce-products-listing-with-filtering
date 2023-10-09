import React from "react";
import Product from "./Product";

function ProductList({ filteredProducts }) {
    // console.log(filteredProducts);

  return (
    <>
      {filteredProducts.map((product, id) => (
      <Product key={id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
