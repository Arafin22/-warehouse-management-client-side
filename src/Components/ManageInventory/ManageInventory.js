import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
// import InventoryNavber from "../Navbar/InventoryNavber";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [userinfo, userloading, usererror] = useAuthState(auth);

  const [isReload, setIsreload] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isReload]);

  const heandelDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/manageinventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((pd) => pd._id !== id);
          setProducts(remaining);
        });
    }
  };

  const handelUpload = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const email = userinfo.email;
    console.log(name, price);

    fetch("http://localhost:5000/uploadpd", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        quantity,
        image,
        email,
      }),
      headers: {
        authorization: `${userinfo.email} ${localStorage.getItem(
          "accessToken"
        )}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        event.target.reset();

        setIsreload(!isReload);
      });
  };

  return (
    <div className="mb-5">
      {/* <InventoryNavber></InventoryNavber> */}
      <h1 className="mx-auto text-center">Products Table</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">user</th>
            <th scope="col">Photo</th>

            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {products.map((pd) => (
            <tr key={pd._id}>
              <td>{pd.name}</td>
              <td>{pd.price}</td>
              <td>{pd.quantity}</td>
              <td>{pd.email}</td>
              <td>
                <img className="table-image" src={pd.image} />
              </td>
              <button
                className="btn btn-danger"
                onClick={() => heandelDelete(pd._id)}
              >
                delete
              </button>

              {/* <InventoryProduct pd={pd}></InventoryProduct> */}
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <div className="mb-5">
        <h1 className="text-center text-primary">Upoload Products</h1>
        <div className="w-50 mx-auto">
          <form onSubmit={handelUpload}>
            <div class="mb-3">
              <label for="" class="form-label">
                Name
              </label>
              <input
                name="name"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">
                Price
              </label>
              <input
                name="price"
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-1">
              <label for="" class="form-label">
                quantity
              </label>
              <input name="quantity" type="text" class="form-control" />
            </div>
            <div class="mb-1">
              <label for="" class="form-label">
                Image
              </label>
              <input name="image" type="text" class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      </div>
      <div className="mb-5">
        <hr />
      </div>
    </div>
  );
};

export default ManageInventory;
