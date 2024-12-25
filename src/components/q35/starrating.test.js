import { render, screen } from "@testing-library/react";
import StarRating from "./StarRating";

describe("should check all the possibility of StarRating", () => {
  test("should check the initial one start", () => {
    render(<StarRating totalStars={1} />);
    expect(screen.getByText("★")).toBeInTheDocument();
  });
  test("should check the 5 start", () => {
    render(<StarRating totalStars={5} />);
    expect(screen.getAllByText("★").length).toBe(5);
  });
  test("should check the 3 start", () => {
    render(<StarRating totalStars={3} />);
    expect(screen.getAllByText("★").length).toBe(3);
  });
});
