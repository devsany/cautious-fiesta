import { render, screen } from "@testing-library/react";
import Q2 from "./Q2";

describe("Q2", () => {
  test("should check the Can you check if the component displays a specific title or heading?", () => {
    render(<Q2 />);
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();

    expect(screen.getByTitle("my_name")).toBeInTheDocument();
  });
});
