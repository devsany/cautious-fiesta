import { act, fireEvent, render, screen } from "@testing-library/react";
import CountdownTimerWithAlert from "./CountdownTimerWithAlert ";

jest.useFakeTimers();
describe('Verify that the countdown timer starts and decrements correctly when the "Start" button is clicked.', () => {
  test("should check the countdown timer with alert render correctly", () => {
    render(<CountdownTimerWithAlert initialSeconds={10} />);
    expect(screen.getByText(/Remaining Time: 10 seconds/)).toBeInTheDocument();
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
  test("should check the start button work properly or not", () => {
    render(<CountdownTimerWithAlert initialSeconds={10} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/Remaining Time: 8 seconds/)).toBeInTheDocument();
  });
  test("should check the pause button render correctly", () => {
    render(<CountdownTimerWithAlert initialSeconds={10} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Pause",
      })
    );
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(
      screen.queryByText(/Remaining Time: 6 seconds/)
    ).not.toBeInTheDocument();
  });
  test("should check the reset button render correctly", () => {
    render(<CountdownTimerWithAlert initialSeconds={10} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Reset",
      })
    );
    expect(screen.getByText(/Remaining Time: 10 seconds/i)).toBeInTheDocument();
  });
  test("should check the alert button", () => {
    render(<CountdownTimerWithAlert initialSeconds={3} />);
    fireEvent.click(screen.getByText(/Start/i));

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(window.alert).toHaveBeenCalledWith("Time up!");
  });
});
