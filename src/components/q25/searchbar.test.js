import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("should check the search component", () => {
  const items = [{ name: "apple" }, { name: "banana" }, { name: "orange" }];
  test("search bar to test the list", () => {
    render(<SearchBar items={items} />);
    expect(screen.getByLabelText("Search...")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Search...",
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("should check the coponent render correctly when the serch input box happen", () => {
    render(<SearchBar items={items} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "ap" },
    });

    expect(screen.getByRole("textbox").value).toBe("ap");
    expect(screen.getByText("apple")).toBeInTheDocument();
  });
  test("should check none matching item", () => {
    render(<SearchBar items={items} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "kiwi" },
    });
    expect(screen.getByRole("textbox").value).toBe("kiwi");
    expect(screen.queryByText("apple")).toBeNull();
  });
});
