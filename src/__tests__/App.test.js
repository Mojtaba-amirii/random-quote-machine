import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import axios from "axios";
import store from "../redux/store";
import { Provider } from "react-redux";
import { jest } from "@jest/globals";

jest.mock("axios");

axios.get.mockResolvedValue({
  data: {
    quote: "Test quote",
    author: "Test author",
  },
});

test("renders QuoteBox component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const quoteBoxElement = screen.getByTestId("quote-box");
  expect(quoteBoxElement).toBeInTheDocument();
});
