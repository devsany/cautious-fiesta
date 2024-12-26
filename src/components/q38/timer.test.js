import { render, screen, act, fireEvent } from "@testing-library/react";
import Timer from "./Timer";
jest.useFakeTimers();
describe("should check the element to check the timer", () => {
  test("initial render 0 second", () => {
    render(<Timer />);
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
  });
  test("should check the time increase by when the start button click", () => {
    render(<Timer />);
  });
  test("should check the time increase by 1 when the timer start", () => {
    render(<Timer />);
    //click on start button
    fireEvent.click(
      screen.getByRole("button", {
        name: "Start",
      })
    );
    //time value increase by 1
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    //check the time value increase by 1 in ui
    expect(screen.getByText(/Elapsed Time: 1 seconds/i)).toBeInTheDocument();
  });

  test("should check the time stop when Stop button Click", () => {
    render(<Timer />);
    //click onStart button
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    //time value increase by 1
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    //expecting the value increae by 1
    expect(screen.getByText(/Elapsed Time: 3 seconds/i)).toBeInTheDocument();
    //click on stop button
    fireEvent.click(
      screen.getByRole("button", {
        name: "Stop",
      })
    );
    //expecting the value stop and value appear 3 second
    expect(screen.getByText(/Elapsed Time: 3 seconds/i)).toBeInTheDocument();
  });
  test("does not start multiple time when the start button hit multiple time", () => {
    render(<Timer />);
    fireEvent.click(screen.getByText(/Start/i));
    fireEvent.click(screen.getByText(/Start/i));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Elapsed Time: 1 seconds/i)).toBeInTheDocument();
  });
  //reset the timer
  test("Reset the timer by click on reset button", () => {
    render(<Timer />);
    fireEvent.click(screen.getByText("Start"));
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText(/Elapsed Time: 3 seconds/i)).toBeInTheDocument();
    //reset the timer by clicking on reset button
    fireEvent.click(screen.getByText("Reset"));
    //execting the time value  should be 0
    expect(screen.getByText(/Elapsed Time: 0 seconds/i)).toBeInTheDocument();
  });
});
