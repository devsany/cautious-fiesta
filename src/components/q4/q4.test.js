import { render, screen } from "@testing-library/react";
import Q4 from "./Q4";

describe("Can you test if the component renders correctly with specific props?", () => {
  test("should check prop render correctly", () => {
    render(<Q4 section="2" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Number of Section :- 2")).toBeInTheDocument();
  });
});
