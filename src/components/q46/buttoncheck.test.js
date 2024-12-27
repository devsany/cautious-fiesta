import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./ButtonChechk";

describe("should check the button component", () => {
  test("check the render the component correctly", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Add to Cart" />);
    expect(
      screen.getByRole("button", {
        name: "Add to Cart",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Add to Cart",
      })
    );
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
