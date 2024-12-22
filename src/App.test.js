import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "@jest/globals";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("the second test", () => {
  test("should check the presence of paragraph text", () => {
    render(<App />);
    expect(screen.getByText(/Edit/)).toBeInTheDocument();
  });
});
