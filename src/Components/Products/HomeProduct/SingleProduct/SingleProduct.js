import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  // console.log(props);
  const { _id, name, image, price, description, supplier, email } = props.pd;

  const hendelDelevery = () => {
    const quantity = parseInt(quantity);
    console.log(quantity);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h5 className="card-title">description: {description}</h5>
          <h5 className="card-title">supplier: {supplier}</h5>
          <h5 className="card-title">description: {description}</h5>
          <img src={image} />

          <h6 className="card-subtitle mb-2 text-muted">Price : {price}</h6>

          <Link to={`/product/${_id}`}>
            <button onClick={hendelDelevery} className="btn btn-link">
              Delevery Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
