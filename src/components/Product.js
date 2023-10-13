import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  const { id } = useParams();

  const foundproducts = products.find((obj) => obj.id.toString() === id);
  // console.log(foundproducts);
  return (
 
      <div className="product-info">
        <h1>{foundproducts.product_name}</h1>
        <div className="product-image-div">
              <img src={foundproducts.brand} alt="product" />
            </div>

            <div className="product-info-div">
              <span className="pre-text"> Category:</span>
              <p className="category">{foundproducts.category}</p>
            </div>

            <div className="product-info-div">
              <span className="pre-text">Description:</span>
              <span className="description">{foundproducts.description}</span>
            </div>
            <div className="product-info-div">
              <span className="pre-text">Price:</span>
              <span className="price">${foundproducts.price}</span>
            </div>
            <div className="product-info-div">
              <span className="pre-text">Release-date:</span>
              <span className="release-date">{foundproducts.release_date}</span>
            </div>
            <div className="product-info-div">
              <span className="pre-text">Weight:</span>
              <span className="weight">{foundproducts.weight} Kgs</span>
            </div>
            <div className="product-info-div">
              <span className="pre-text">Color:</span>
              <span className="color">{foundproducts.color}</span>
            </div>

            <div className="product-info-div">
              <span className="pre-text">Available:</span>
              {!foundproducts.is_available ? (
                <span className="available">Available</span>
              ) : (
                <span className="not-available">Not Available</span>
              )}
            </div>
      </div>
   
  );
};

export default Product;
