import { render, screen } from "@testing-library/react";
import LongForm from "./LongForm";

describe("long form check", () => {
  test("should check the long form all the tag", () => {
    render(<LongForm />);

    //heading
    expect(
      screen.getByRole("heading", {
        name: "Long Form Example",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Section 1",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    //checking first input box
    // M-1
    expect(
      screen.getByRole("textbox", {
        name: "Full Name",
      })
    ).toBeInTheDocument();
    // M-2
    expect(
      screen.getByPlaceholderText("Enter your full name")
    ).toBeInTheDocument();
    // M-3

    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Email Address",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Age")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter your age")).toBeInTheDocument();

    //gender radio
    expect(screen.getByText("Gender")).toBeInTheDocument();

    expect(screen.getByLabelText("Male")).toBeInTheDocument();
    expect(screen.getByDisplayValue("male")).toBeInTheDocument();

    expect(screen.getByLabelText("Female")).toBeInTheDocument();
    expect(screen.getByDisplayValue("female")).toBeInTheDocument();

    expect(screen.getByLabelText("Other")).toBeInTheDocument();
    expect(screen.getByDisplayValue("other")).toBeInTheDocument();

    expect(
      screen.getByLabelText("I accept the terms and conditions")
    ).toBeInTheDocument();
    expect(screen.getByTestId("term-and-condition")).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Bio",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Bio")).toBeInTheDocument();
    expect(screen.getByTestId("select-bio")).toBeInTheDocument();

    expect(screen.getByLabelText("Favorite Color")).toBeInTheDocument();
    expect(screen.getByTestId("select-color")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        type: "submit",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Upload your resume")).toBeInTheDocument();
    expect(screen.getByTestId("file-upload")).toBeInTheDocument();

    expect(screen.getByLabelText("Country")).toBeInTheDocument();

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Languages Known")).toBeInTheDocument();
    expect(screen.getByTestId("select-language")).toBeInTheDocument();

    expect(screen.getByText("Preferred Communication")).toBeInTheDocument();

    expect(screen.getByDisplayValue("email")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();

    expect(screen.getByDisplayValue("phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();

    expect(screen.getByAltText("a person with laptop")).toBeInTheDocument();
  });
});
