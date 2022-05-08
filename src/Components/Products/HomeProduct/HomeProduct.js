import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
} from "recharts";
import "./HomeProduct.css";

import SingleProduct from "./SingleProduct/SingleProduct";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://secret-badlands-52528.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const hendelDelevery = (product) => {};

  return (
    <>
      <h2 className="m-4 mx-auto text-center text-primary">Book Items</h2>
      <div className="row m-3">
        {products.slice(0, 6).map((pd) => (
          <div className="col-sm-12 col-md-4 mt-3 mb-5" key={pd._id}>
            <SingleProduct pd={pd}></SingleProduct>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="chart-container col-sm-12">
          <div width="100%" height="100%">
            <h2 className="text-primary">Books Quantity</h2>
            <hr />
            <BarChart
              width={1300}
              height={400}
              data={products}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis
              className={{
                font: 10,
              }}
              dataKey="name"
            /> */}
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="name" fill="#8884d8" />
              <Bar dataKey="quantity" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
