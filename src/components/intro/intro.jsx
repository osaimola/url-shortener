import React from "react";
import "./intro.css";
import illustration_working from "../../images/illustration-working.svg";

function Intro() {
  return (
    <React.Fragment>
      <div className="intro-main">
        <div className="intro-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            onClick={() => {
              window.location.href = "#shorten-url";
            }}
          >
            Get Started
          </button>
        </div>
        <div className="intro-image">
          <img alt="working" src={illustration_working} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
