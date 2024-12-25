import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("should check the component render correctly (Counter)", () => {
  test("component render correctly", () => {
    render(<Counter />);
    expect(
      screen.getByRole("heading", { name: "Counter" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Increment" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "0",
      })
    ).toBeInTheDocument();
  });
  test("On button click the count increase by one", () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(
      screen.getByRole("heading", {
        name: "1",
      })
    ).toBeInTheDocument();
  });

  test("should check the component render correctly when button click twice", () => {
    render(<Counter />);

    // Get the initial heading and button elements
    const valueHeading = screen.getByRole("heading", { level: 2 });
    const buttonElement = screen.getByRole("button", { name: "Increment" });

    // Double click the button
    fireEvent.doubleClick(buttonElement);

    // Check if the heading's text is increased to 2
    expect(valueHeading).toHaveTextContent("2");
  });
});
