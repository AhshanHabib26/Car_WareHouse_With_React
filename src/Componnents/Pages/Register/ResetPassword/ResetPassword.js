import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../../firebase_init";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail] =
    useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail)
  };

 

  const handleLoginBtn = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(email)
    toast('Password Reset Link Sent')
  };

  return (
    <div className="container my-5">
      <div className="main_container ">
        <div className="title_container">
          <h3 className="form_title_text mb-4">
            Reset Your <span className="form_title_text_span">Password</span>{" "}
          </h3>
        </div>
        <form onClick={handleLoginBtn}>
          <div className="input_box">
            <div className="input_item">
              <label htmlFor="userEmail">
                Your Email <span className="label_sign">*</span>
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                placeholder="demo@info.com"
              />
            </div>
            <div className="input_item">
              <div className="submit_btn_login">
                <input type="button" value="Log In" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
