import React, { useState } from "react";
import "./shortener.css";
import Result from "../result/result";

function renderResults(resultObjects) {
  // create jsx elements with shortened url(s)
  return resultObjects.map(resultObject => {
    const inputURL =
      resultObject.longUrl.length < 28
        ? resultObject.longUrl
        : `${resultObject.longUrl.substring(0, 29)}...`;

    return (
      <Result
        key={resultObject.shortUrl}
        longUrl={inputURL}
        shortUrl={resultObject.shortUrl}
      />
    );
  });
}

function handleClick(inputText, hookValue, setHookValue) {
  // shorten user URL input and update hook
  let url = formatUrl(inputText);
  return fetch(`https://api.urlday.com/short?url=${url}`)
    .then(response => {
      return response.json();
    })
    .then(responseJSON => {
      setHookValue([
        ...hookValue,
        {
          longUrl: inputText,
          shortUrl: responseJSON.result
        }
      ]);
    });
}

function is_url(str) {
  //check if input is valid url
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

function formatUrl(inputText) {
  // format url for api
  if (inputText.startsWith("http")) {
    return inputText;
  } else {
    return `http://${inputText}`;
  }
}

function Shortener() {
  const [urlResults, setUrlResults] = useState([
    {
      longUrl: "https://www.mangororor.hahna/hdhdh.php",
      shortUrl: "https://urlday.com/JHSK"
    },
    {
      longUrl: "https://www.welovepups.com/locations/pups/adopt.php",
      shortUrl: "https://urlday.com/JgfK"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <div className="shortener" id="shorten-links">
        <input
          name="url"
          placeholder="Shorten a link here..."
          onChange={e => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            if (is_url(inputValue)) {
              handleClick(inputValue, urlResults, setUrlResults);
            } else {
              //TODO show user error message
              console.log("invalid url");
            }
          }}
        >
          Shorten it!
        </button>
      </div>

      {renderResults(urlResults)}
    </React.Fragment>
  );
}

export default Shortener;
