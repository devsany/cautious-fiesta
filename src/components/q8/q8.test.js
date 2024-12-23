import { fireEvent, render, screen } from "@testing-library/react";
import Q8 from "./Q8";

describe("Can you check if a dropdown menu displays the correct options when clicked?", () => {
  test("should check correctly", () => {
    render(<Q8 />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Select Value")).toBeInTheDocument();
    expect(screen.getByText("India")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
    expect(screen.getByText("UAE")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("USA"));
    expect(screen.getByText("USA")).toBeInTheDocument();
  });
});
