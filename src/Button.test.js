import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { expect, test } from "@jest/globals";

describe("The checker of Button Element Tag", () => {
  test("should check element", () => {
    render(<Button />);
    expect(screen.getByText(/my name is sunny raj/)).toBeInTheDocument();
  });
  test("should secind", () => {
    render(<Button />);
    expect(
      screen.getByText("my father name is lalan kumar")
    ).toBeInTheDocument();
  });
  describe("nested checker", () => {
    test("should check the input element", () => {
      render(<Button />);
      expect(
        screen.getByPlaceholderText("Enter your name")
      ).toBeInTheDocument();
    });
  });
});
