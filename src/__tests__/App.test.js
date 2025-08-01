import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";
import { store } from "../redux/store";

// Mock axios at the module level - use a simple function instead of jest.fn()
jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: [{ q: "Test quote", a: "Test author" }],
    }),
}));

test("renders QuoteBox component", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const quoteBoxElement = screen.getByTestId("quote-box");
  expect(quoteBoxElement).toBeInTheDocument();

  // Wait for the async action to complete and verify the quote is displayed
  await waitFor(() => {
    expect(screen.getByText(/Test quote/)).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText(/Test author/)).toBeInTheDocument();
  });
});
