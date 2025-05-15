import axios from "axios";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import App from "../App";
import store from "../redux/store";

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
