import React from "react";
import { Link } from "react-router-dom";
import "./singleProduct.css";

const SingleProduct = (props) => {
  // console.log(props);
  const { _id, name, image, price, description, supplier, email } = props.pd;

  const hendelDelevery = () => {
    const quantity = parseInt(quantity);
    console.log(quantity);
  };
  return (
    <div className="">
      <div className="product-container">
        <h5 className="">Name: {name}</h5>
        <h5 className="">description: {description}</h5>
        <h5 className="">supplier: {supplier}</h5>
        <h5 className="">description: {description}</h5>
        <img className="home-product-img" src={image} />

        <h6 className="">Price : {price}</h6>

        <Link to={`/product/${_id}`}>
          <button onClick={hendelDelevery} className="btn btn-link">
            Delevery Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
