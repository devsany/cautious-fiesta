import { fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("should chekc the greeting component render correctly", () => {
  test("should chekc the component render correctly", () => {
    render(<Greeting />);
    expect(
      screen.getByRole("heading", {
        name: "Greeting Card",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("hyy! 🖐🏻 I am sunny")).toBeInTheDocument();
  });
});
