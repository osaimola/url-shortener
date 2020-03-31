import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

// TODO:  update tests

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

it("Renders <App /> without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
