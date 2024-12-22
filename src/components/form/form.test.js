import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Should Check the all the element of form component", () => {
  test("should check", () => {
    render(<Form />);
    expect(
      screen.getByRole("textbox", {
        name: "Name",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Bio",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Job application form",
      })
    ).toBeInTheDocument();


    expect(
      screen.getByRole("heading", {
        name: "Section 1",
      })
    ).toBeInTheDocument();

    
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
  });
});
