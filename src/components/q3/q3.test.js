import { render, screen } from "@testing-library/react";
import Q3 from "./Q3";

describe("Q3", () => {
  test("Can you verify if default values are displayed when no props are provided?", () => {
    render(<Q3 title="section-1" />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Title:-section-1")).toBeInTheDocument();
  });
});
