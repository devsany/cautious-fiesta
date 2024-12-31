import { fireEvent, render, screen } from "@testing-library/react";
import GreetingMain from "./GreetingMain";

describe("should check the greetmain component", () => {
  test("should render the component", () => {
    render(<GreetingMain name="Sunny" />);
    expect(
      screen.getByRole("heading", {
        name: "Greeting Main",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("hello my name is Sunny")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Show",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Show",
      })
    );
    expect(screen.getByText("hii I am Sunny")).toBeInTheDocument();
  });
});
