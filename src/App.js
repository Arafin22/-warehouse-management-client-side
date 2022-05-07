import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import EditProduct from "./Components/Products/EditProduct/EditProduct";
import ManageInventory from "./Components/ManageInventory/ManageInventory";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="product/:id" element={<EditProduct />} />
        <Route path="manageinventory" element={<ManageInventory />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
