import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Can you test if a form submission calls the appropriate handler?", () => {
  test("should check the form submittion correctly", () => {
    render(<Form />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Name",
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Email",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();

    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Name",
      }),
      {
        target: {
          value: "Sunny",
        },
      }
    );

    expect(
      screen.getByRole("textbox", {
        name: "Name",
      }).value
    ).toBe("Sunny");

    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Email",
      }),
      {
        target: {
          value: "sunny@sunny.com",
        },
      }
    );

    expect(
      screen.getByRole("textbox", {
        name: "Email",
      }).value
    ).toBe("sunny@sunny.com");
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );

    expect(screen.getByText("Sunny sunny@sunny.com")).toBeInTheDocument();
  });
});
