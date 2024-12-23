import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import ButtonClicker from "./ButtonClicker";

describe("Can you test if a button click triggers the expected function?", () => {
  test("should check -> Can you test if a button click triggers the expected function?", () => {
    // Mocking the global alert function
    global.alert = jest.fn();
    const handleClick = () => {
      alert("Button was clicked!");
    };
    render(<ButtonClicker onClick={handleClick} />);

    expect(
      screen.getByRole("button", {
        name: "Click Me",
      })
    ).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: "Click Me",
    });
    fireEvent.click(buttonElement);
    expect(global.alert).toHaveBeenCalledWith("Button was clicked!");
  });
});
