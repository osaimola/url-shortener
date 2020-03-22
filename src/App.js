import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";

function App() {
  return (
    <React.Fragment>
      <div className="head">
        <Navbar />
      </div>
      <Intro />

      <div id="shorten-url">kk</div>
    </React.Fragment>
  );
}

export default App;
