import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const hendelDelevery = (product) => {};

  return (
    <div className="row mt-5">
      {products.slice(0, 4).map((pd) => (
        <div className="col-sm-12 col-md-4 mt-3 mb-5" key={pd._id}>
          <SingleProduct pd={pd}></SingleProduct>
        </div>
      ))}
    </div>
  );
};

export default HomeProduct;
