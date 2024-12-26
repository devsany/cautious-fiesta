import { act, fireEvent, render, screen } from "@testing-library/react";
import PomodoroTimer from "./PomodoroTimer";

jest.useFakeTimers();
describe("Ensure that the component PomodoroTimer renders the element correctly.", () => {
  test("should check the element render correctly", () => {
    render(<PomodoroTimer />);
    expect(screen.getByText(/Break Time: 50:00/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Start",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Pause",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Reset",
      })
    ).toBeInTheDocument();
  });
  test("Ensure that the start button renders correctly.", () => {
    render(<PomodoroTimer />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Work Time: 49:59/i)).toBeInTheDocument();
  });
  test("Ensure that the pause button renders correctly", () => {
    render(<PomodoroTimer />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Pause",
      })
    );
    expect(screen.getByText(/Break Time: 49:59/i)).toBeInTheDocument();
  });
  test("Ensure the Reset button render correcltly", () => {
    render(<PomodoroTimer />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Reset",
      })
    );
    expect(screen.getByText(/Break Time: 50:00/i)).toBeInTheDocument();
  });
});
