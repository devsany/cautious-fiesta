import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("should check the component of login", () => {
  test("should check the component of ui rendering", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Username",
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeInTheDocument();
  });
  test("should check the component input box render correctly", () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByTestId("username"), {
      target: {
        value: "admin",
      },
    });
    expect(
      screen.getByRole("textbox", {
        name: "Username",
      }).value
    ).toBe("admin");
    fireEvent.change(screen.getByTestId("password"), {
      target: {
        value: "admin",
      },
    });
    expect(screen.getByTestId("password").value).toBe("admin");
  });
  test("should check the form submit on button click", () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByTestId("username"), {
      target: {
        value: "admin",
      },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: {
        value: "admin",
      },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Login",
      })
    );
    expect(screen.getByText("admin admin")).toBeInTheDocument();
  });
});
