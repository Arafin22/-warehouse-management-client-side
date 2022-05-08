import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import EditProduct from "./Components/Products/EditProduct/EditProduct";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import MyItem from "./Components/MyItem/MyItem";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App mb-5">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="product/:id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="manageinventory"
          element={
            <PrivateRoute>
              <ManageInventory />
            </PrivateRoute>
          }
        />
        <Route
          path="myitem"
          element={
            <PrivateRoute>
              <MyItem />
            </PrivateRoute>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
