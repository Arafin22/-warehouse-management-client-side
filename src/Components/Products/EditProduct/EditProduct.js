import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {
  let { id } = useParams();

  //   const [update,setUpdate] = useState(true);
  const [product, setProduct] = useState({});
  const [isReload, setIsreload] = useState(false);
  // console.log(product);
  // const udproduct =product.quantity;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const handelUpload = (e) => {
    e.preventDefault();
    const storeQuantity = parseInt(product?.quantity);
    const newQuantity = parseInt(e.target.quantity.value);

    const quantity = storeQuantity + newQuantity;
    if (quantity > 0) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "PUT",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success", data);
          alert("users added successfully!!!");
          e.target.reset();
          setIsreload(!isReload);
        });
    } else {
      console.log("input number");
    }
  };

  const handelDelevry = (e) => {
    e.preventDefault();
    const storeQuantity = parseInt(product?.quantity);
    const quantity = storeQuantity - 1;

    // setProduct(...product,newQuantity-1);

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        // alert('users added successfully!!!');
        // e.target.reset();
        setIsreload(!isReload);
      });
  };

  return (
    <div>
      <button className="buy-btn mt-4">
        <Link className="nav-link" to="/manageinventory">
          Manage Inventory
        </Link>
      </button>

      <div className="row mt-5">
        <div className="col-sm-12 col-md-6">
          <div class="card-container">
            <div class="Product-area">
              <div class="floating-div">
                <div class="shoe-1">
                  <img
                    className="single-product-img"
                    src={product.image}
                    alt="red-nike"
                  />
                </div>
              </div>
            </div>
            <div class="text-area">
              <div class="heading-area">
                <h2>{product.name}</h2>
                <h4>{product.quantity}</h4>
              </div>

              <p class="paragraph-area">{product.discription}</p>

              <div class="price-and-buy-btn">
                <h2 class="price-1">$ {product.price}</h2>
                <form onSubmit={handelDelevry}>
                  <button type="submit" class="buy-btn">
                    DELEVRY NOW
                  </button>
                </form>

                {/* <button class="buy-btn">DELEVRY NOW</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <div className="card-container">
            <div className="m-5">
              <form onSubmit={handelUpload}>
                <div className="mb-3">
                  <label className="form-label m-2">quantity</label>
                  <input className="form-control" name="quantity" type="text" />
                </div>

                <button type="submit" className="buy-btn">
                  Quantity Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

{
  /* <div className="row">
<div className="col-sm-6">
  <div className="card text-center" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">Name: {product.name}</h5>
      <h5 className="card-title">Quantity: {product.quantity}</h5>
      <h5 className="card-title">Price: {product.price}</h5>
      <p className="card-text">Email: {product.email}</p>
      <form onSubmit={handelDelevry}>
        <button type="submit" className="btn btn-primary">
          Dalevery
        </button>
      </form>
    </div>
  </div>
</div>
<div className="col-sm-6">
  <div className="card text-end" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">Quantity manage section</h5>

      <form onSubmit={handelUpload}>
        <div className="mb-3">
          <label className="form-label">quantity</label>
          <input name="quantity" type="text" />
        </div>

        <button type="submit" className="btn btn-primary">
          Quantity Update
        </button>
      </form>
    </div>
  </div>
</div>
</div> */
}
