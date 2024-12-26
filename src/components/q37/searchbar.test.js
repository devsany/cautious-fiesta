import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("should check all the possible unit testing of searchbar component", () => {
  const items = ["apple", "banana", "mango", "grapes"];
  test("should chent the input box and list item and list value", () => {
    render(<SearchBar items={items} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText("apple")).toBeInTheDocument();
  });
  test("should check the input value when the state changes", () => {
    render(<SearchBar items={items} />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "apple" },
    });
    expect(screen.getByPlaceholderText("Search...").value).toBe("apple");
    
  });
});

