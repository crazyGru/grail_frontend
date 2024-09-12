import React from "react";
import "./SignIn.css";
import tl from "../top_left.png";
import br from "../bottom_right.png";
import logo from "../logo_.png";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../utilis/config";

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="page-signin">
      <img src={tl} className="tl_logo" alt="Top Left" />
      <img src={br} className="br_logo" alt="Bottom Right" />
      <div className="signin-container">
        <div className="welcome">
          Welcome To <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="sign-button" onClick={handleGoogleSignIn}>
          <FaGoogle style={{ marginRight: "8px" }} />{" "}
          <span>Continue with Google</span>
        </div>
        <div className="sign-button">
          <FaFacebook style={{ marginRight: "8px" }} />{" "}
          <span>Continue with Facebook</span>
        </div>
        <div className="sign-button">
          <FaInstagramSquare style={{ marginRight: "8px" }} />{" "}
          <span>Continue with Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
