import React, { useState } from "react";
import "./result.css";

function resetButtonText(setHook) {
  setHook("Copy");
}

function copyToClipboard(targetString) {
  // create text area and use to copy target string to clipboard
  const el = document.createElement("textarea");
  el.value = targetString;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function Result(props) {
  const [buttonText, setButtonText] = useState("Copy");

  return (
    <React.Fragment>
      <div className="result">
        <div className="long-url">
          <p>{props.longUrl}</p>
        </div>
        <div className={`shortened-url ${buttonText}`}>
          <p id="shortenedUrlResult">{props.shortUrl.slice(8)}</p>
          <button
            onClick={() => {
              setButtonText("Copied");
              copyToClipboard(props.shortUrl);
              setTimeout(() => resetButtonText(setButtonText), 1800);
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Result;
