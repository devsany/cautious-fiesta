import { render, screen, act, fireEvent } from "@testing-library/react";
import Stopwatch from "./StopWatch";
jest.useFakeTimers();
describe("Should check the component (Stopwatch)", () => {
  test("should check the initial value in 0 and some another ui value as well", () => {
    render(<Stopwatch />);
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Start",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Stop",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Reset",
      })
    ).toBeInTheDocument();
  });
  test("should check the element render after 1 second is 1 second when the button (start) click", () => {
    render(<Stopwatch />);
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Elapsed Time: 1 seconds/i)).toBeInTheDocument();
  });
  test("should check the render value when the stop button click", () => {
    render(<Stopwatch />);
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText(/Elapsed Time: 3 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Stop",
      })
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(
      screen.queryByText(/Elapsed Time: 5 seconds/i)
    ).not.toBeInTheDocument();
  });
  test("should check the timer when the reset button click and the timer sset to 0(zero) again", () => {
    render(<Stopwatch />);
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText(/Elapsed Time: 3 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Reset",
      })
    );
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
  });
});
