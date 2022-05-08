import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import InventoryNavber from "../Navbar/InventoryNavber";

const MyItem = () => {
  const [adduserproduct, setAdduserproduct] = useState([]);
  const [userinfo, userloading, usererror] = useAuthState(auth);

  console.log(adduserproduct);
  useEffect(() => {
    fetch("https://secret-badlands-52528.herokuapp.com/myitem", {
      headers: {
        authorization: `${userinfo.email} ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdduserproduct(data));
  }, []);
  return (
    <div>
      <InventoryNavber></InventoryNavber>

      <h1 className="mx-auto text-center">Products Table</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">user</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>

        <tbody>
          {adduserproduct.map((pd) => (
            <tr key={pd._id}>
              <td>{pd.name}</td>
              <td>{pd.price}</td>
              <td>{pd.quantity}</td>
              <td>{pd.email}</td>
              <td>
                <img className="table-image" src={pd.image} />
              </td>

              {/* <InventoryProduct pd={pd}></InventoryProduct> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItem;
