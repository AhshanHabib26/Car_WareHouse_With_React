import React, { useEffect, useState } from "react";
import GoogleImg from "../../../../Images/google.png";
import GitHubImg from "../../../../Images/github.png";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase_init";
import Spinner from "../../../Spinner/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    const userEmail = e.target.value;
    if (userEmail === "") {
      toast("Please Enter Your Email");
    } else {
      setEmail(userEmail);
    }
  };
  const handlePassword = (e) => {
    const userPassword = e.target.value;
    if (userPassword === "") {
      toast("Enter Your Password");
    } else {
      setPassword(userPassword);
    }
  };

  useEffect(() => {
    if (loading || loading1) {
      <Spinner />;
    }
  });

  useEffect(() => {
    if (user || user1) {
      const url = "https://habib-car-house.herokuapp.com/getToken";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Welcome! Back...");
          localStorage.setItem("token", data.accessToken);
          navigate(from, { replace: true });
        });
    }
  });

  const handleLoginBtn = (e) => {
    signInWithEmailAndPassword(email, password);
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <div className="main_container ">
        <div className="title_container">
          <h3 className="form_title_text mb-4">
            Login Your <span className="form_title_text_span">Account</span>{" "}
          </h3>
        </div>
        <form onClick={handleLoginBtn}>
          <div className="form_container">
            <div className="input_box">
              <div className="input_item">
                <label htmlFor="userName">
                  Your Name <span className="label_sign">*</span>
                </label>
                <input type="text" placeholder="Habib" required />
              </div>
              <div className="input_item">
                <label htmlFor="userPass">
                  Your Password <span className="label_sign">*</span>
                </label>
                <input
                  onChange={handlePassword}
                  type="password"
                  placeholder="****"
                  required
                />
              </div>
            </div>
            <div className="input_box">
              <div className="input_item">
                <label htmlFor="userEmail">
                  Your Email <span className="label_sign">*</span>
                </label>
                <input
                  onChange={handleEmail}
                  type="email"
                  placeholder="demo@info.com"
                  required
                />
              </div>
              <div className="input_item">
                <div className="submit_btn_login">
                  <input type="button" value="Log In" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="or_container text-center my-3">Or Continue With. <Link className="text-decoration-none text-danger" to='/reset-password'>Forget Your Password?</Link> </div>
        <div className="scl_container">
          <div className="google_btn">
            <button onClick={() => signInWithGoogle()}>
              {" "}
              <img className="googleImgResize" src={GoogleImg} alt="" /> Google
            </button>
          </div>
          <div className="github_btn">
            <button>
              <img className="githubImgResize" src={GitHubImg} alt="" /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
