import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { List } from "react-content-loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Register = () => {
  const myStyle = {
    width: "400px",
    margin: "4rem auto",
    height: "500px",
    borderRadius: "20px",
    padding: "40px",
    // border: "1px solid rebeccapurple",
    boxShadow: "3px 3px 31px 2px #7C72C3",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // if (error) {
  //   return (
  //     <div>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }
  if (loading) {
    return <List />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const hendalRegistration = () => {
    if (password === conPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      toast("password dont match");
    }

    if (error) {
      console.log(error);
      switch (error?.code) {
        case "auth/email-already-in-use":
          toast("email alrady used");
          break;

        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  };

  return (
    <div style={myStyle} className="d-flex justify-content-center ">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            required
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
          />
        </div>

        <button onClick={hendalRegistration} className="btn btn-primary">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
