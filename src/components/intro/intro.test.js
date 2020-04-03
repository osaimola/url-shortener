import React from "react";
import ReactDOM from "react-dom";
import Intro from "./intro";

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

it("renders Intro without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Intro />, div);
});
