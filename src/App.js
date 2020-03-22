import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Shortener from "./components/shortener/shortener";

function App() {
  return (
    <React.Fragment>
      <div className="head">
        <Navbar />
      </div>
      <Intro />

      <div className="body-container">
        <Shortener />
      </div>
    </React.Fragment>
  );
}

export default App;
