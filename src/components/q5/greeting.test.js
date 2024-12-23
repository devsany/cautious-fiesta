import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("q5", () => {
  test("Can you validate if conditional rendering based on a prop works as expected? make a component", () => {
    render(<Greeting isLoggedIn={true} username="Sunny" />);
    expect(
      screen.getByRole("heading", {
        name: "Welcome back, Sunny!",
      })
    ).toBeInTheDocument();
  });
  test("should check the greeting component isLoggedIn if false", () => {
    render(<Greeting isLoggedIn={false} />);
    expect(
      screen.getByRole("heading", {
        name: "Please log in to continue.",
      })
    ).toBeInTheDocument();
  });
});
