import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setSelectedItem, setUser } from "../redux/userSlice";
import { headerItems } from "../utilis/headerItems";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.user.selectedItem);
  const user = useSelector((state) => state.user.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close menu on item click
  };

  const handleSignOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <header className="flex items-center justify-between px-8 py-2 bg-blue-950 text-white fixed w-full z-50 shadow-md shadow-gray-800">
      <img
        src={logo}
        className="h-4 cursor-pointer"
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div
        className="md:flex md:items-center md:gap-4 hidden"
      >
        {headerItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`cursor-pointer p-2 ${item.name === selectedItem ? "font-bold" : ""
              }`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center">
            <RxAvatar color="white" size={28} />
            <FaSignOutAlt
              color="white"
              className="ml-4 cursor-pointer"
              onClick={handleSignOut}
            />
          </div>
        ) : (
          <Link
            to="/signin"
            className="text-white p-2 border border-white rounded hover:bg-white hover:text-blue-800 transition"
          >
            Sign In
          </Link>
        )}
      </div>
      <div className="relative md:hidden">
        <button
          className="p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul className={`fixed w-full right-0 bg-blue-950 py-2.5 px-4 shadow-gray-800 shadow-md ${!isMenuOpen ? 'hidden' : ''}`}>
          {headerItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer p-2 ${item.name === selectedItem ? "font-bold" : ""
                }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
