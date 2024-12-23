import { fireEvent, render, screen } from "@testing-library/react";
import InputUpdate from "./InputUpdate";

describe("Can you verify if an input field updates its value on user input?", () => {
  test("should check the component correcty", () => {
    render(<InputUpdate />);

    expect(
      screen.getByRole("heading", {
        name: "Tour & Travel Form",
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter place name");
    fireEvent.change(input, {
      target: { value: "Your Form Submitted Successfully" },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(
      screen.getByText("Your Form Submitted Successfully")
    ).toBeInTheDocument();
  });
});
