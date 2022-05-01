import React, { useEffect, useState } from "react";
import GoogleImg from "../../../../Images/google.png";
import GitHubImg from "../../../../Images/github.png";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase_init";


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };
  const handlePassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };

  useEffect(() => {
    if (user || user1) {
      navigate(from, { replace: true });
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
        <div className="or_container text-center my-3">Or Continue With.</div>
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
