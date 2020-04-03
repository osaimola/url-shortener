import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Shortener from "./shortener";

it("renders Shortener without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Shortener />, div);
});

test("shortner does not accept empty input", () => {
  const { container, getByText } = render(<Shortener />);
  let containerElement = container.firstElementChild;
  expect(containerElement.className).toEqual("shortener ");
  let button = getByText("Shorten it!");
  fireEvent.click(button);
  expect(containerElement.className).toEqual("shortener error");
});

test("shortner does not accept non URL input", () => {
  const { container, getByText } = render(<Shortener />);
  let containerElement = container.firstElementChild;
  let inputfield = containerElement.firstElementChild;
  expect(containerElement.className).toEqual("shortener ");
  inputfield.value = "hello world";
  console.log(inputfield.value);
  let button = getByText("Shorten it!");
  fireEvent.click(button);
  expect(containerElement.className).toEqual("shortener error");
});
