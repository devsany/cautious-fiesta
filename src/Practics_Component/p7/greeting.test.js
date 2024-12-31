import { fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("should check the greeting component thoroully", () => {
  test("should check the component render correctly", () => {
    render(<Greeting name="Everyone" />);
    expect(
      screen.getByRole("heading", {
        name: "Hello, Everyone!",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a new name")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Update Name",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Change Greeting",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Hide Greeting",
      })
    ).toBeInTheDocument();
  });

  test("should check the component render", () => {
    render(<Greeting name="Everyone" />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: {
        value: "Hi",
      },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter a new name"), {
      target: {
        value: "Kumar",
      },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Update Name",
      })
    );
    expect(screen.getByText("Hi, Kumar!")).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Change Greeting",
      })
    );
    expect(
      screen.getByRole("heading", {
        name: "Hi, Everyone!",
      })
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Hide Greeting",
      })
    );

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Show Greeting",
      })
    ).toBeInTheDocument();
    
  });
});
