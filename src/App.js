import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <React.Fragment>
      <div className="head">
        <Navbar />
      </div>

      <h1>More than just links</h1>
      <h2>Advanced Statistics</h2>
      <h3>Detailed Recognition</h3>
      <p>Hello World</p>
    </React.Fragment>
  );
}

export default App;
