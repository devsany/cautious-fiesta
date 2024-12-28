import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
window.alert = jest.fn();
describe("should check the counter component work properly", () => {
  test("should check the component render all the component correctly", () => {
    render(<Counter />);
    expect(
      screen.getByRole("heading", {
        name: "Counter",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Decrease By One",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );
    expect(screen.getByText(1)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Decrease By One",
      })
    );
    expect(screen.getByText(0)).toBeInTheDocument();
  });
  test("should chekc alert appear when user click 5 times on Increase By One Button", () => {
    render(<Counter />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Increase By One",
      })
    );
    // expect(screen.getByText("1")).toBeInTheDocument();
    expect(window.alert).toHaveBeenCalledWith(
      "number shouldnot be greater then 5"
    );
  });
  test("should check the window alert when the user exist by 0", () => {
    render(<Counter />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Decrease By One",
      })
    );
    expect(window.alert).toHaveBeenCalledWith(
      "number must not be less then zero"
    );
  });
});
