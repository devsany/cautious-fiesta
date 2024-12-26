import { fireEvent, render, act, screen } from "@testing-library/react";
import CountdownTimer from "./CountdownTimer";

jest.useFakeTimers();

describe("should check the counter element", () => {
  test("should check the component render correctly", () => {
    render(<CountdownTimer initialSeconds={3} />);
    expect(screen.getByText(/Remaining Time: 3 seconds/i)).toBeInTheDocument();
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
  test("should check after 1 second the time remaining 2 second when the start button click", () => {
    render(<CountdownTimer initialSeconds={3} />);
    expect(screen.getByText(/Remaining Time: 3 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Remaining Time: 2 seconds/i)).toBeInTheDocument();
  });
  test("should check the reset button", () => {
    render(<CountdownTimer initialSeconds={5} />);
    expect(screen.getByText(/Remaining Time: 5 seconds/i)).toBeInTheDocument();
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
      jest.useFakeTimers(1000);
    });
    expect(
      screen.queryByText(/Remaining Time: 2 seconds/i)
    ).not.toBeInTheDocument();
  });
  test("should check the reset button and time change to initial time", () => {
    render(<CountdownTimer initialSeconds={6} />);
    expect(screen.getByText(/Remaining Time: 6 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/Remaining Time: 4 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Reset",
      })
    );
    expect(screen.getByText(/Remaining Time: 6 seconds/i)).toBeInTheDocument();
  });
});
