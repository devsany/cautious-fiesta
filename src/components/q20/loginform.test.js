import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("should check the element correctly", () => {
  test("should check the component", () => {
    render(<LoginForm />);
    expect(
      screen.getByRole("textbox", { name: "username" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "password" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
 
  });
});
