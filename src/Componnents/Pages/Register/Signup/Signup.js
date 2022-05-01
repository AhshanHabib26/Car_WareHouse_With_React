import React, { useEffect, useState } from "react";
import "./Signup.css";
import GoogleImg from "../../../../Images/google.png";
import GitHubImg from "../../../../Images/github.png";
import auth from "../../../../firebase_init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };


  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

 

  const handleCreateUser = (e) => {

      createUserWithEmailAndPassword(email, password);
    
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <div className="main_container ">
        <div className="title_container">
          <h3 className="form_title_text mb-4">
            Register Your <span className="form_title_text_span">Account</span>{" "}
          </h3>
        </div>
        <form onClick={handleCreateUser}>
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
                  name="password"
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
                  name="email"
                  type="email"
                  placeholder="demo@info.com"
                  required
                />
              </div>
              <div className="input_item">
                <label htmlFor="userPhone">
                  Your Phone <span className="label_sign">*</span>
                </label>
                <input type="tel" placeholder="+000000000000" required />
              </div>
            </div>
            <div className="submit_btn">
              <input type="button" value="Register" />
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

export default Signup;
