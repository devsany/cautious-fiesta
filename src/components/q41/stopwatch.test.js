import { fireEvent, render, screen, act } from "@testing-library/react";
import Stopwatch from "./Stopwatch";

jest.useFakeTimers();
describe("should check the stopwatch render correctly", () => {
  test("should check the element stopwatch", () => {
    render(<Stopwatch />);
    expect(screen.getByText(/Elapsed Time: 0.0 seconds/i)).toBeInTheDocument();
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
    expect(
      screen.getByRole("button", {
        name: "Lap",
      })
    ).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
  test("should check the start button start the timer", () => {
    render(<Stopwatch />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText(/Elapsed Time: 3.0 seconds/i)).toBeInTheDocument();
  });
  test("should check teh stop button working properly", () => {
    render(<Stopwatch />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    expect(screen.getByText(/Elapsed Time: 4.0 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Stop",
      })
    );
    act(() => {
      jest.advanceTimersByTime(6000);
    });
    expect(
      screen.queryByText(/Elapsed Time: 6.0 seconds/i)
    ).not.toBeInTheDocument();
  });
  test("should check the reset button working properly", () => {
    render(<Stopwatch />);
    expect(
      screen.getByRole("button", {
        name: "Reset",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByText(/Elapsed Time: 5.0 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Reset",
      })
    );
    expect(screen.getByText(/Elapsed Time: 0.0 seconds/i)).toBeInTheDocument();
  });
  test("should check the lap button working properly and the list time render correctly", () => {
    render(<Stopwatch />);
    expect(
      screen.getByRole("button", {
        name: "Start",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Lap",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByText(/Elapsed Time: 5.0 seconds/i)).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Lap",
      })
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText(/Lap 1: 5.0 seconds/i)).toBeInTheDocument();
  });
});
