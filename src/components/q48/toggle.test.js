import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "./Toggle";

describe("should check the toggle button", () => {
  test("should check the component render correctly", () => {
    render(<Toggle />);
    expect(
      screen.getByRole("button", {
        name: "OFF",
      })
    ).toBeInTheDocument();
  });
  test("should check the event trigger when button click and name of button changes", () => {
    render(<Toggle />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "OFF",
      })
    );
    expect(
      screen.getByRole("button", {
        name: "ON",
      })
    ).toBeInTheDocument();
  });
});
