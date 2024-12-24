import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./ButtonClick";

describe("should check the button click render correctly", () => {
  test("should check the component render correctly", () => {
    const handleClick = jest.fn();

    render(<Button label="Button" onClick={handleClick} />);
    expect(
      screen.getByText("Button", {
        name: "Button",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByText("Button", {
        name: "Button",
      })
    );
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
