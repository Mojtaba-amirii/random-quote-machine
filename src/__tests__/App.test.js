import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders QuoteBox component", () => {
  render(<App />);
  const quoteBoxElement = screen.getByTestId("quote-box");
  expect(quoteBoxElement).toBeInTheDocument();
});
