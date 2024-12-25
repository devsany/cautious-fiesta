import { fireEvent, render, screen } from "@testing-library/react";
import Notification from "./Notification";

describe("should check the element of notification", () => {
  test("noficaiton element", () => {
    render(<Notification message="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Dismiss")).toBeInTheDocument();
  });
  test("should check the notification when disappear when the dismiss button click", () => {
    render(<Notification message="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Dismiss")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Dismiss"));
    expect(screen.queryByText("Hello World")).not.toBeInTheDocument();
  });
  test("should initially the notification dismiss button click it isnot going to be appear", () => {
    const { rerender } = render(<Notification message="Hello World" />);
    fireEvent.click(screen.getByText("Dismiss"));
    rerender(<Notification message="Hello World" />);
    expect(screen.queryByText("Dismiss")).not.toBeInTheDocument();
  });
});
