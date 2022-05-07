import React from "react";
import { Link } from "react-router-dom";

const InventoryNavber = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/editProduct"
                >
                  Edit Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addprooduct">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manageinventory">
                  Manage Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myitem">
                  My Item
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default InventoryNavber;
