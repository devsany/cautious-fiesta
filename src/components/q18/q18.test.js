import { render, screen } from "@testing-library/react";

import Button from "./But";

describe("should check the emelent", () => {
  test("should check the button render correctly", () => {
    render(<Button label="Button" />);
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Button",
      })
    ).toBeInTheDocument();
  });
});
