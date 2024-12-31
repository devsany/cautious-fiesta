import { fireEvent, render, screen } from "@testing-library/react";
import GreetingEnhance from "./GreetingEnhance";
import Button from "../p1/P1";

describe("should check the greetingenhance component correctly", () => {
  test("should check the element render correctly", () => {
    render(<GreetingEnhance name="Sunny" />);
    expect(
      screen.getByRole("heading", {
        name: "Greeting Enhance",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("hii I am Sunny")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your greeting message")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Greet Message",
      })
    ).toBeInTheDocument();
  });
  test("should input field render correctly", () => {
    render(<GreetingEnhance name="Sunny" />);
    fireEvent.change(
      screen.getByPlaceholderText("Enter your greeting message"),
      {
        target: {
          value: "Raj",
        },
      }
    );
    expect(
      screen.getByPlaceholderText("Enter your greeting message").value
    ).toBe("Raj");
  });
  test("should check the input greeting message render on screen correctly when the button click", () => {
    render(<GreetingEnhance name="Sunny" />);
    fireEvent.change(
      screen.getByPlaceholderText("Enter your greeting message"),
      {
        target: {
          value: "Raj",
        },
      }
    );
    expect(
      screen.getByPlaceholderText("Enter your greeting message").value
    ).toBe("Raj");
    fireEvent.click(
      screen.getByRole("button", {
        name: "Greet Message",
      })
    );
    expect(screen.getByText("Raj")).toBeInTheDocument();
  });
});
