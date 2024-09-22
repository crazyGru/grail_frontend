import React, { useEffect } from "react";
import "./SignIn.css";
import tl from "../top_left.png";
import br from "../bottom_right.png";
import logo from "../logo_.png";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../utilis/config";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userName = encodeURIComponent(user.displayName);
      const userEmail = encodeURIComponent(user.email);
      const userProfilePic = encodeURIComponent(user.photoURL);

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/google-signin?name=${userName}&email=${userEmail}&picture=${userProfilePic}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        dispatch(setUser(data));
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        console.error(data.detail);
      }
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
      </div>
    </div>
  );
};

export default SignIn;
