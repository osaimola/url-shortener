import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import hamburger from "../../images/hamburger.svg";

function Navbar() {
  const [floatNav, setFloatNav] = useState("");

  return (
    <React.Fragment>
      <div className="navbar">
        <img alt="shortly" src={logo} />
        <div className="navbar links main">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="navbar cta main">
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
        <div className="nav-toggle">
          <img
            alt="nav-toggle"
            src={hamburger}
            className="nav-toggle"
            onClick={() => {
              console.log("clicked");
              floatNav === "" ? setFloatNav("show") : setFloatNav("");
            }}
          />
        </div>
      </div>

      <div className={`floating-navbar ${floatNav}`}>
        <div className="navbar links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className="navbar cta">
          <a href="#">Login</a>
          <button>Sign Up</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
