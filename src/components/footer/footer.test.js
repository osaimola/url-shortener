import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer";

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

it("renders Footer without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});
