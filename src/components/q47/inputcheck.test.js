import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./InputCheck";

describe("should check the input", () => {
  test("render the element correctly", () => {
    render(<Input placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });
  test("should chekc the input render correctly when the value changes", () => {
    render(<Input placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: {
        value: "Sunny",
      },
    });
    expect(screen.getByPlaceholderText("Enter your name")).toHaveValue("Sunny");
    // expect(screen.getAllByPlaceholderText("Enter your name").value).toBe(
    //   "Sunny"
    // );
  });
});
