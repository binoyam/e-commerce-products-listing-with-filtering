import React from "react";
import Product from "./Product";

function ProductList({ filteredProducts }) {
    // console.log(filteredProducts);

  return (
    <>
      {filteredProducts.map((product, id) => (
        <Product onClick={openProduct} key={id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
