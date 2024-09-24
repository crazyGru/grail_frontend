import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setSelectedItem, setUser } from "../redux/userSlice";
import { headerItems } from "../utilis/headerItems";
import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.user.selectedItem);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item.name));
    navigate(item.link);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleSignOut = () => {
    dispatch(clearUser()); // Clear user from Redux store
    localStorage.removeItem("user"); // Remove user from local storage
    navigate("/signin"); // Redirect to sign-in page
  };

  return (
    <header className="App-header">
      <img
        src={logo}
        className="h-4 cursor-pointer"
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
      <div className="App-pages">
        {user ? (
          <div className="user-signin-info">
            <RxAvatar color="white" size={28} />
            <FaSignOutAlt
              color="white"
              className="item-logout"
              onClick={handleSignOut}
            />
          </div>
        ) : (
          <Link to="/signin" className="App-link">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
