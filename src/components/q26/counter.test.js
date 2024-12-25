import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("should check the component of render", () => {
  test("should check the all functionality in one go of counter component", () => {
    render(<Counter />);
    expect(
      screen.getByRole("heading", {
        name: "Counter",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Increment",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Decrement",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Increment",
      })
    );

    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Decrement",
      })
    );
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  });
});
