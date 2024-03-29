import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [Username, setUsername] = useState(""); // Define and initialize Username state
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUsername("");
    navigate("/");
  };

  const allowedRoutes = ["/home", "/dashboard"];

  return (
    <header>
      <nav>
        <div>
          <div className="logo">
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt="logo"
            />
          </div>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                isActive={(match) => match.isExact}
                activeStyle={{ color: "#fe8402" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how"
                isActive={(match) => match.isExact}
                activeStyle={{ color: "#fe8402" }}
              >
                How it Works
              </NavLink>
            </li>
            <li className="buttn">
              {!Username ? (
                <NavLink
                  to="/signin"
                  isActive={(match) => match.isExact}
                  activeStyle={{ color: "#fe8402" }}
                >
                  Sign In
                </NavLink>
              ) : (
                <NavLink
                  to="/home"
                  isActive={(match) => match.isExact}
                  activeStyle={{ color: "#fe8402" }}
                >
                  Quest.
                </NavLink>
              )}
              <button className="btn" onClick={handleSignOut} signout value="Sign Out">
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;