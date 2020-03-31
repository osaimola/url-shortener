import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Navbar from "./navbar";

it("renders Navbar without creashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
});

test("renders all Features links", () => {
  const { getAllByText } = render(<Navbar />);
  const linkElement = getAllByText(/Features/i);
  expect(linkElement.length).toEqual(2);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});

test("renders all Pricing links", () => {
  const { getAllByText } = render(<Navbar />);
  const linkElement = getAllByText(/Pricing/i);
  expect(linkElement.length).toEqual(2);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});

test("renders all Resources links", () => {
  const { getAllByText } = render(<Navbar />);
  const linkElement = getAllByText(/Resources/i);
  expect(linkElement.length).toEqual(2);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});

test("renders all Login links", () => {
  const { getAllByText } = render(<Navbar />);
  const linkElement = getAllByText(/Login/i);
  expect(linkElement.length).toEqual(2);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/
