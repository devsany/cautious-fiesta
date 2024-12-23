import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { renderToReadableStream } from "react-dom/server";

describe("should check the element of Input in In file", () => {
  test("should check the input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  test("should check the input eleemnt in different way", () => {
    render(<Input />);
    expect(
      screen.getByRole("textbox", {
        name: "what is your name ",
      })
    ).toBeInTheDocument();
  });
  test("should check the button element", () => {
    render(<Input />);
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
  });
});
