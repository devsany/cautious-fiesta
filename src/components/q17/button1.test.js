import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("should check the element correctly", () => {
  test("should check the element correctly", () => {
    render(<Button />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
