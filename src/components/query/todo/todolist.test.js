import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("should check the todolist component", () => {
  test("should check the element", () => {
    const tasks = ["a", "b", "c"];
    render(<TodoList tasks={tasks} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(tasks.length);
  });

  test("should check the element where the array length is 0", () => {
    const tasks = ["a"];
    render(<TodoList tasks={tasks} />);
    expect(screen.queryByText("No tasks available")).not.toBeInTheDocument();
  });
  test("should render correctly array length in 0", () => {
    const tasks = [];
    render(<TodoList tasks={tasks} />);
    expect(screen.getByText("No tasks available")).toBeInTheDocument();
  });
  test("should check the alert", () => {
    const tasks = [];
    render(<TodoList tasks={tasks} />);
    expect(screen.queryByRole("alert")).toHaveTextContent("No tasks available");
  });
});
