import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

describe("should check the element correctly", () => {
  test("should render the counter component correctly", () => {
    render(<Counter />);

    expect(
      screen.getByRole("button", {
        name: "Increment",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Decrement",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
  test("should check the count increse by 1 when Increment button click", () => {
    render(<Counter />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Increment",
      })
    );
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
  test("should check the component render -1 when Decrement button click", () => {
    render(<Counter />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Decrement",
      })
    );
    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });
});
