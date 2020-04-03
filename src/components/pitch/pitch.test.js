import React from "react";
import ReactDOM from "react-dom";
import Pitch from "./pitch";

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

it("renders Pitch without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Pitch />, div);
});
