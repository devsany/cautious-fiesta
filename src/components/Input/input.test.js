import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("check the input component", () => {
  test("should check the input tag", () => {
    render(<TextInput />);
    expect(
      screen.getByPlaceholderText("Type something...")
    ).toBeInTheDocument();
  });
  test("should check the input tag when user enter some value", () => {
    render(<TextInput />);
    const input = screen.getByPlaceholderText("Type something...", {
      target: {
        value: "Hello World",
      },
    });
    fireEvent
      .change(input)
      .expect(screen.getByText("Typed Value: Hello World"))
      .toBeInTheDocument();
  });
});
