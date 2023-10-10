import React from "react";

function Product({ selectedProduct }) {
  console.log(selectedProduct)
  return (
    <div className="product-detail">
      <h3>{selectedProduct.product_name}</h3>
    </div>
  );
}

export default Product;
