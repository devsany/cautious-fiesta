import { render, screen } from "@testing-library/react";
import Message from "./Message";

describe("should check the message component", () => {
  // Message correctly render when loggedIn is true
  it("should check when the loggedIn is true", () => {
    render(<Message loggedIn={true} />);
    expect(screen.getByText("Hello, User!")).toBeInTheDocument();
  });

  //Message correctly render when loggedIn is false
});

describe("should check the logged in false", () => {
  fit("should check when the loggedIn is false", () => {
    render(<Message loggedIn={false} />);
    expect(screen.getByText("Please Log In")).toBeInTheDocument();
  });
});
