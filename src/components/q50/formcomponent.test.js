import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./FormComponent";

describe("should check the component", () => {
  const handleSubmit = jest.fn();
  test("should check the form component", () => {
    render(<Form onSubmit={handleSubmit} />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
  });
  test("should check the input box take the value or not", () => {
    render(<Form onSubmit={handleSubmit} />);
    expect(screen.getByPlaceholderText("Name").value).toBe("");
    expect(screen.getByPlaceholderText("Email").value).toBe("");
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: {
        value: "Sunny",
      },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: {
        value: "sunny@gmail.com",
      },
    });
    expect(screen.getByPlaceholderText("Name").value).toBe("Sunny");
    expect(screen.getByPlaceholderText("Email").value).toBe("sunny@gmail.com");
  });
  test("should check the button render correctly and event tregred correctly", () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText(/Submit/i)).toHaveBeenCalledTimes(1);
  });
});
