import React from "react";

function Product({ product }) {
    // console.log(product)
  return (
    <div key={product.id} className="product">
      <p>
        <span className="product-name">{product.product_name}</span>{" "}
      </p>
      <img className="product-img" src={product.brand} alt="product" />
      <p>
        Category: <span className="category">{product.category}</span>{" "}
      </p>
      <p className="description">
        Description: <span className="description">{product.description}</span>{" "}
      </p>
      <p>
        Available:{" "}
        {!product.is_available ? (
          <span className="available">Available</span>
        ) : (
          <span className="not-available">Not Available</span>
        )}
      </p>
    </div>
  );
}

export default Product;
