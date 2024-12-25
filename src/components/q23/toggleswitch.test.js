import { fireEvent, render, screen } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";

describe("should check the toggle switch", () => {
  test("Toggle Switch", () => {
    render(<ToggleSwitch />);
    expect(
      screen.getByRole("heading", {
        name: "Toggle Switch",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "OFF",
      })
    ).toBeInTheDocument();
  });
  test("When button Click", () => {
    render(<ToggleSwitch />);
    expect(
      screen.getByRole("button", {
        name: "Turn ON",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Turn ON",
      })
    );
    expect(
      screen.getByRole("heading", {
        name: "ON",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Turn OFF",
      })
    ).toBeInTheDocument();
  });
});
