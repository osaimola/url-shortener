import React, { useState } from "react";
import "./shortener.css";
import Result from "../result/result";

function Shortener() {
  return (
    <React.Fragment>
      <div className="shortener">
        <input name="url" placeholder="Shorten a link here..."></input>
        <button>Shorten it!</button>
      </div>

      <Result
        longUrl="http:xyxyxyxyx"
        shortUrl="bite.lies/"
        liveUrl="fullshortenedurlresult"
      />

      <Result
        longUrl="http:xyxyxyxyx"
        shortUrl="bite.lies/"
        liveUrl="fullshortenedurlresult"
      />

      <Result
        longUrl="http:xyxyxyxyx"
        shortUrl="bite.lies/"
        liveUrl="fullshortenedurlresult"
      />

      <Result
        longUrl="http:xyxyxyxyx"
        shortUrl="bite.lies/"
        liveUrl="fullshortenedurlresult"
      />
    </React.Fragment>
  );
}

export default Shortener;
