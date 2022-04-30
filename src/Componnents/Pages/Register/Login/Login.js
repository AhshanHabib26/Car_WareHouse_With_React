import React from "react";
import GoogleImg from "../../../../Images/google.png";
import GitHubImg from "../../../../Images/github.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="main_container ">
        <div className="title_container">
          <h3 className="form_title_text mb-4">
            Login Your <span className="form_title_text_span">Account</span>{" "}
          </h3>
        </div>
        <form>
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
                <input type="password" placeholder="****" required />
              </div>
            </div>
            <div className="input_box">
              <div className="input_item">
                <label htmlFor="userEmail">
                  Your Email <span className="label_sign">*</span>
                </label>
                <input type="email" placeholder="demo@info.com" required />
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
            <button>
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
