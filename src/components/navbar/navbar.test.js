import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Navbar from "./navbar";

/** test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

it("renders Navbar without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
});

test("renders app icon", () => {
  const { getByAltText } = render(<Navbar />);
  const logoElement = getByAltText("shortly");
  expect(logoElement).toBeInTheDocument();
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

test("renders all Sign Up buttons", () => {
  const { getAllByText } = render(<Navbar />);
  const linkElement = getAllByText(/Sign Up/i);
  expect(linkElement.length).toEqual(2);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});

test("renders Hamburger menu button", () => {
  const { getByAltText } = render(<Navbar />);
  const hamburger = getByAltText("nav-toggle");
  expect(hamburger).toBeInTheDocument();
});

test("clicking hamburger toggles floating menu", () => {
  const { container, getByAltText } = render(<Navbar />);
  const hamburger = getByAltText("nav-toggle");
  expect(container.lastElementChild.className).toEqual("floating-navbar ");
  fireEvent.click(hamburger);
  expect(container.lastElementChild.className).toEqual("floating-navbar show");
  fireEvent.click(hamburger);
  expect(container.lastElementChild.className).toEqual("floating-navbar ");
});
