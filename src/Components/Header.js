import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setSelectedItem, setUser } from "../redux/userSlice";
import { headerItems } from "../utilis/headerItems";
import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.user.selectedItem);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item.name));
    navigate(item.link);
  };

  const handleSignOut = () => {
    dispatch(clearUser()); // Clear user from Redux store
    localStorage.removeItem("user"); // Remove user from local storage
    navigate("/signin"); // Redirect to sign-in page
  };

  return (
    <div className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="App-pages">
        {headerItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`item ${item.name === selectedItem ? "selected" : ""}`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <ul className="App-pages">
        {user ? (
          <>
            <span className="App-link">{user}</span>
            <FaSignOutAlt
              color="white"
              className="item-logout"
              onClick={handleSignOut}
            />
          </>
        ) : (
          <Link to="/signin" className="App-link">
            Sign In
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
