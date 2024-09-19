import Header from "../Components/Header";
import "./Success.css";
import Logo from "../logo_.png";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";

const Success = () => {
  const [copied, setCopied] = useState(false);
  const licenseKey =
    "Z0FBQUFBQm03S0F2dzd5RnZReElLUDJyUmZvNENtaHBtWmJUQl9WU0Z0VjBheFk4WHF2VEJfMy13WHM1WHV2R25acnpQcnlxWGM4eEVkY0Y1d2ZNdEpLeWVTUzFfb3FCS1NSRlZKWDQ2MkxnanZMSFZISHBlcjA3M0tzX1cyZEk4elVrRnpyNnJFbXlSS0JSZ0lWSTczT2htVkZzR1RuaktQNnZvOFBJZk1JSlVPSVp3WHdUbzJpR2R5Y1ROckpRNjNSTjdpTWcyeWxYYUwyYnlLVk1STXFSY296OTJGMkZGOG1tNE9LVkxaaHdHZzI2NktqM2lIUG9RdXpkY1lSODNWT2s3Rk14YnJmUGpMaWhubHhsWG1xck9WRG9LZjJLaEE9PQ==";

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const shortenedKey = `${licenseKey.slice(0, 30)}...${licenseKey.slice(-30)}`;

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
          </span>
        </div>
        <div className="back-message">Back to home</div>
      </div>
    </div>
  );
};

export default Success;
