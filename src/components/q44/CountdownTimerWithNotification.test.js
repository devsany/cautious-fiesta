import { act, fireEvent, render, screen } from "@testing-library/react";
import CountdownTimerWithNotification from "./CountdownTimerWithNotification";
jest.useFakeTimers();

describe("should check the timer render correctly", () => {
  test("should check the render ui first", () => {
    render(<CountdownTimerWithNotification initialSeconds={5} />);
    expect(screen.getByText(/Remaining Time: 5 seconds/)).toBeInTheDocument();
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
    expect(screen.queryByText("Time's up!")).not.toBeInTheDocument();
  });
  test("should check the component render correctly", () => {
    render(<CountdownTimerWithNotification initialSeconds={5} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/Remaining Time: 3 seconds/)).toBeInTheDocument();
  });
  test("should check the pause button render correctly", () => {
    render(<CountdownTimerWithNotification initialSeconds={5} />);
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
      jest.advanceTimersByTime(1000);
    });
    expect(screen.queryByText(/Remaining Time: 2/)).not.toBeInTheDocument();
  });
  test("check the reset button render correctly", () => {
    render(<CountdownTimerWithNotification initialSeconds={5} />);
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
        name: "Reset",
      })
    );
    expect(screen.getByText(/Remaining Time: 5/)).toBeInTheDocument();
  });
  test("should check the time's up! render correctly", () => {
    render(<CountdownTimerWithNotification initialSeconds={5} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(6000);
    });
    expect(screen.getByText(/Time's up!/)).toBeInTheDocument();
  });
});
