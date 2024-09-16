import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem, setUser } from "../redux/userSlice";
import { headerItems, redirectTo } from "../utilis/headerItems";
import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    redirectTo(item.link);
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
          <span className="App-link">{user}</span>
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
