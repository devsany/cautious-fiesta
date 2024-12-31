import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("should check the Greet component", () => {
  test("should check the greet component render correctly", () => {
    render(<Greet name="sunny" />);
    expect(screen.getByText("sunny")).toBeInTheDocument();
  });
});
