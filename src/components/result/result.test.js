import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Result from "./result";

it("renders Result without crashing", () => {
  let div = document.createElement("div");
  ReactDOM.render(
    <Result
      key="urlResultEement"
      longUrl="enteredURL"
      shortUrl="12345678shortURL"
    />,
    div
  );
});

test("renders Result values accurately", () => {
  let { getByText } = render(
    <Result
      key="urlResultEement"
      longUrl="enteredURL"
      shortUrl="12345678shortURL"
    />
  );

  let inputURL = getByText("enteredURL");
  let shortURL = getByText("shortURL");
  expect(inputURL).toBeInTheDocument();
  expect(shortURL).toBeInTheDocument();
});
