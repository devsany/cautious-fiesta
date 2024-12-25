import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("should check the compinent render correctly", () => {
  const items = ["item1", "item2", "item3", "Banana"];
  test("Dropdown component in one go", () => {
    render(<Dropdown items={items} onSelect={() => {}} />);
    expect(screen.getByLabelText("Select an item:")).toBeInTheDocument();
    items.forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });
  test("should render the element when i select the option value", () => {
    render(<Dropdown items={items} onSelect={() => {}} />);
    fireEvent.change(screen.getByLabelText(/Select an item:/i), {
      target: { value: "Banana" },
    });
    expect(screen.getByText("Selected: Banana")).toBeInTheDocument();
  });
});
