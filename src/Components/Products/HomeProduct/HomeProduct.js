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
    <div className="row">
      {products.slice(0, 4).map((pd) => (
        <div className="col-4 g-4" key={pd._id}>
          <SingleProduct pd={pd}></SingleProduct>
        </div>
      ))}
    </div>
  );
};

export default HomeProduct;
