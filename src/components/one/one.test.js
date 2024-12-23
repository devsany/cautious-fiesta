import { render, screen } from "@testing-library/react";
import One from "./One";

describe("check", () => {
  test("should check the element", () => {
    render(<One />);

    expect(
      screen.getByRole("textbox", {
        name: /bi/i,
      })
    ).toBeInTheDocument();
    // expect(screen.getByLabelText("Enter your name")).toBeInTheDocument();

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter country name")).toBeInTheDocument();

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByLabelText("Gender")).toBeInTheDocument();

    //button
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Fill the all corresponding form",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Job application form",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();
    // expect(
    //   screen.getByLabelText("Enter your name", {
    //     selector: "input",
    //   })
    // ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your address")
    ).toBeInTheDocument();
  });
});
