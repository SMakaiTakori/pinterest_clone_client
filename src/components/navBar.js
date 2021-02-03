import React from "react";
import logo from "../images/transparent-pinterest-icon.png";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul id="nav">
        <img
          alt={logo}
          src={logo}
          style={{
            float: "left",
            height: "60px",
            paddingTop: "10px",
          }}
        />
        <h2 style={{ color: "#E60023", paddingTop: "15px" }}>Clone</h2>

        <h3>
          <li>
            <NavLink exact to="/pins">
              {" "}
              My Pins{" "}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about-app">
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
        </h3>
      </ul>
    </div>
  );
};

export default NavBar;
