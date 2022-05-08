import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Books Inventory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/manageinventory"
                >
                  Manage Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <span>
                {user ? (
                  <spam>
                    {user.email}
                    <button
                      className="btn btn-link"
                      onClick={() => signOut(auth)}
                    >
                      <Link className="nav-link" to="/login">
                        Sign Out
                      </Link>
                    </button>
                  </spam>
                ) : (
                  //  <spam>{user.displayName}
                  //  <button className='btn btn-link' onClick={()=> signOut(auth)}>Sign Out</button>
                  //  </spam>

                  "USER"
                )}
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
