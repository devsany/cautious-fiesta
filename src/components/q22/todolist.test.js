import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("should check the component render correctly", () => {
  test("Todo normal component", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("heading", {
        name: "Todo List",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Add",
      })
    ).toBeInTheDocument();
  });
  test("should check the todo render correctly", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "Sunny",
      },
    });
    expect(screen.getByRole("textbox").value).toBe("Sunny");
    fireEvent.click(
      screen.getByRole("button", {
        name: "Add",
      })
    );
    expect(screen.getByText("Sunny")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Remove Todo",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Remove Todo",
      })
    );
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
