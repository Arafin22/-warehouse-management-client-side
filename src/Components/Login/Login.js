import React, { useState } from "react";
import { List } from "react-content-loader";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
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

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const [userinfo, userloading, usererror] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (userinfo) {
    const url = "http://localhost:5000/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: userinfo.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }

  const hendalLogin = () => {
    signInWithEmailAndPassword(email, password);

    const error = error || googleerror;
    if (error) {
      switch (error?.code) {
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

  if (loading) {
    return <List />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
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

          <button onClick={hendalLogin} className="btn btn-primary">
            Submit
          </button>
          <hr />

          <button
            className="btn btn-warning"
            onClick={() => signInWithGoogle()}
          >
            Google
          </button>
        </form>

        <ToastContainer />
      </div>

      {/* <div className="App">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signInWithEmailAndPassword(email, password)}>
          log In
        </button>
      </div> */}

      {/* <div className="mx-auto mt-5 text-center">
        <button onClick={() => signInWithGoogle()} className="btn btn-warning">
          google login
        </button>
      </div> */}
    </div>
  );
};

export default Login;
