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
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl md:text-3xl font-bold text-start">
            Password Protected
          </div>
          <p className="text-base leading-relaxed">
            To view this protected post, enter the password below
          </p>
          <input
            type="password"
            className="bg-gray-50 border border-black text-center p-2 w-4/5"
            placeholder="Enter Password"
          />
          <button
            className="bg-blue-900 rounded-md text-white text-center p-2 w-4/5"
            onClick={handleSubmit}
          >
            {" "}
            Submit
          </button>
        </div>
      </SecondarySlide>
    </div>
  );
};

export default MemberAccess;
