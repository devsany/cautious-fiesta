import {
  fireEvent,
  getByPlaceholderText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import ComplexForm from "./ComplexForm";

describe("test case of complex form", () => {
  test("should check", () => {
    render(<ComplexForm />);
    expect(screen.getByText("Complex Form Example")).toBeInTheDocument();

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your full name")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();

    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your phone number")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirm your password")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Age")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your age")).toBeInTheDocument();

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
    expect(screen.getByTestId("term-condition-checkbox")).toBeInTheDocument();

    expect(screen.getByLabelText("Bio")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Bio",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Profile Picture")).toBeInTheDocument();
    expect(screen.getByTestId("file-input-box")).toBeInTheDocument();

    expect(screen.getByText("Preferred Contact Method")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByDisplayValue("email")).toBeInTheDocument();

    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByDisplayValue("phone")).toBeInTheDocument();

    expect(
      screen.getByLabelText("I agree to the privacy policy")
    ).toBeInTheDocument();
    expect(screen.getByTestId("term-condition-checkbox-2")).toBeInTheDocument();

    expect(screen.getByLabelText("Skills")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", {
        name: "Skills",
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Years of Experience")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your years of experience")
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Job Interests")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Job Interests",
      })
    ).toBeInTheDocument();

    screen
      .getByRole("button", {
        name: /Submit Form/i,
      })
      .toBeInTheDocument();
  });
});
