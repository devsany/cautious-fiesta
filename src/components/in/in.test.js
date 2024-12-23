import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { renderToReadableStream } from "react-dom/server";

describe("should check the element of Input in In file", () => {
  test("should check the input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("should check the button element", () => {
    render(<Input />);
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
  });
  test("should check the input element with there placeholder", () => {
    render(<Input />);
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });
  test("should check the heading", () => {
    render(<Input />);
    expect(
      screen.getByRole("heading", {
        name: "Main Form",
      })
    ).toBeInTheDocument();
  });
  test("should check the another element", () => {
    render(<Input />);
    expect(
      screen.getByRole("heading", {
        name: "Section 1",
      })
    ).toBeInTheDocument();
  });
  test("should check the heading in different way", () => {
    render(<Input />);
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
  });
  test("should check hading element by getByText", () => {
    render(<Input />);
    expect(screen.getByText("Main Form")).toBeInTheDocument();
    expect(screen.getByText("Section 1")).toBeInTheDocument();
  });
  //getbyDesplayValue
  //---- get by display value can chcek the presence of input by it value
  test("should check the input element by display value", () => {
    render(<Input />);
    expect(screen.getByDisplayValue("Sunny")).toBeInTheDocument();
  });

  //getByTitle
  //---- get by element thorugh title
  // This technique is to write the unit test with title just make the title in element and make it more preferable
  test("should check the title element", () => {
    render(<Input />);
    expect(screen.getByTitle("myName")).toBeInTheDocument();
  });
  //to test he getByTestId
  //---- we have to insert the data-testid value in element
  test("should check the element by getByTestId", () => {
    render(<Input />);
    expect(
      screen.getByTestId("this_is_the_heading_section")
    ).toBeInTheDocument();
  });
});
