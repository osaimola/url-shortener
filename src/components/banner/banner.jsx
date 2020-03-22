import React from "react";
import "./banner.css";

function Banner() {
  return (
    <React.Fragment>
      <div className="banner">
        <h2>Boost your links today</h2>
        <button
          onClick={() => {
            window.location.href = "#shorten-links";
          }}
        >
          Get Started
        </button>
      </div>
    </React.Fragment>
  );
}

export default Banner;
