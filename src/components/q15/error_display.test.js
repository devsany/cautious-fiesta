import { render, screen } from "@testing-library/react";
import ErrorDisplay from "./ErrorDisplay";

test("should check the erorr throught the correct error", () => {
  render(<ErrorDisplay error={true} />);
  expect(screen.getByTestId("error-message")).toBeInTheDocument();
});
