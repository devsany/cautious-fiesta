import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("should check the todolist", () => {
  test("should render the todolist correctly", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("heading", { name: "Todo List" })
    ).toBeInTheDocument();
    // expect(screen.queryAllByRole("listitem")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add new task")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Add Task",
      })
    ).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Add new task"), {
      target: {
        value: "Add the sunny",
      },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Task",
      })
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(
      screen.getByRole("button", {
        name: "Delete",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Delete",
      })
    );
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
