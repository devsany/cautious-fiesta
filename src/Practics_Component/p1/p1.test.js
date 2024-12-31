import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./P1";

describe("should check the extension", () => {
  const handleClick = jest.fn();
  test("should chekc the button component render correctly", () => {
    render(
      <Button text="Ram" onClick={handleClick} style={{ border: "gray" }} />
    );
    expect(screen.getByText("Ram")).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Ram",
      })
      
    );
  });
});
