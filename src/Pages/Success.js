import Header from "../Components/Header";
import "./Success.css";
import Logo from "../logo_.png";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";

const Success = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [copied, setCopied] = useState(false);
  const [licenses, setLicenses] = useState([]);
  const [shortenedKey, setShortenedKey] = useState(
    "**************************************************************"
  );

  const fetchLicenses = async () => {
    if (!user) {
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_BACKEND_URL
        }/subscriptions/available-licenses?user_email=${encodeURIComponent(
          user
        )}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch licenses");
      }

      const data = await response.json();
      console.log(data);
      setLicenses(data);
      setShortenedKey(
        `${data[0].license_key.slice(0, 30)}...${data[0].license_key.slice(
          -30
        )}`
      );
    } catch (error) {
      console.error("Error fetching licenses:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(licenses[0].license_key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const handleBackToHome = () => {
    navigate("/"); // Redirect to home
  };

  return (
    <div className="success">
      <Header />
      <div className="slide-success">
        <img src={Logo} alt="logo" />
        <div className="license-message">
          <span className="license-key">
            {shortenedKey}
            <button className="copy-button" onClick={handleCopy}>
              {copied ? <LuCopyCheck /> : <LuCopy />}
            </button>
            <button className="copy-button" onClick={fetchLicenses}>
              <FaEye />
            </button>
          </span>
        </div>
        <div className="back-message" onClick={handleBackToHome}>
          Back to home
        </div>
      </div>
    </div>
  );
};

export default Success;
