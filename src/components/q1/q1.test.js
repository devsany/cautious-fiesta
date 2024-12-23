import { render, screen } from "@testing-library/react";
import Q1 from "./Q1";

describe("Q1", () => {
  test("should check the if the component renders without crashing?", () => {
    render(<Q1 />);
    expect(
      screen.getByRole("heading", {
        name: "Hy my name is sunny",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toBeInTheDocument();
  });
});
