import { render, screen } from "@testing-library/react";
import ItemList from "./ItemList";

describe("Can you test if a list renders the correct number of items?", () => {
  const items = [1, 2, 4, 3, 7, 5, 6];
  test("should check thelist render correctly", () => {
    render(<ItemList items={items} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(items.length);
  });
  test("should check the list render correctly", () => {
    render(<ItemList items={items} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });
});
