import React, { useEffect, useState } from "react";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

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

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/users/${
        isSignUp ? "signup" : "signin"
      }`;
      const body = isSignUp
        ? JSON.stringify({
            username: email,
            email: email,
            password: password,
            avatar_url: "",
          })
        : JSON.stringify({
            username: email,
            password: password,
          });

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (isSignUp) {
          // Handle sign-up success
          dispatch(setUser(data));
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          // Handle sign-in success
          localStorage.setItem("access_token", data.access_token);
          dispatch(setUser(data));
        }
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
        <form
          onSubmit={handleEmailSignIn}
          className="mt-6 flex flex-col space-y-4 z-50"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 px-4 rounded-full w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 px-4  rounded-full w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-950 text-white p-2  rounded-full font-semibold w-full"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-600">or</span>
          </div>
          <button
            className="bg-blue-950 sign-button"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle style={{ marginRight: "8px" }} />{" "}
            <span>Continue with Google</span>
          </button>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-4 text-blue-500"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
