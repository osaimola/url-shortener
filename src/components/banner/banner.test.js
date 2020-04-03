import React from "react";
import ReactDOM from "react-dom";
import Banner from "./banner";

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

it("renders Banner without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Banner />, div);
});
