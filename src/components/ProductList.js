import React from "react";
import Product from "./Product";

function ProductList({ products }) {
    // console.log(typeof(products))
  return (
    <>
      {products.map((product, id) => (
        <Product key={id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
