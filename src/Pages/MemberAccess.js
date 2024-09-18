import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";

import SecondarySlide from "../Components/SecondarySlide";
import "./MemberAccess.css";

const MemberAccess = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/member-exclusive");
  };
  return (
    <div>
      <Header />

      <SecondarySlide>
        <div className="slide-content">
          <div className="header">Password Protected</div>
          <p>To view this protected post, enter the password below</p>
          <input
            type="password"
            className="custom-input"
            placeholder="Enter Password"
          />
          <div className="submit_button" onClick={handleSubmit}>
            {" "}
            {/* Fixed here */}
            Submit
          </div>
        </div>
      </SecondarySlide>
    </div>
  );
};

export default MemberAccess;
