import { fireEvent, render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

describe("Name of the group", () => {
  test("should check all the render correctly", () => {
    render(<ShoppingList />);
    expect(
      screen.getByRole("heading", {
        name: "Shopping List",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByPlaceholderText("Add new item")).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Add new item"), {
      target: {
        value: "Review shoe",
      },
    });
    expect(screen.getByPlaceholderText("Add new item").value).toBe(
      "Review shoe"
    );
    expect(
      screen.getByRole("button", {
        name: "Add Item",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Item",
      })
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    const checkedListOne = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkedListOne);
    expect(checkedListOne).toBeChecked();
  });
});
