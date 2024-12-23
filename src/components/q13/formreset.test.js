import { fireEvent, render, screen } from "@testing-library/react";
import FormReset from "./FormReset";

describe("Can you test if the form resets after a successful submission?", () => {
  test("should check lable", () => {
    render(<FormReset />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
  test("should chcek the form input", () => {
    render(<FormReset />);
    expect(
      screen.getByRole("textbox", {
        name: "Name",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Email",
      })
    ).toBeInTheDocument();
  });
  test("should check the form input value render correctly", () => {
    render(<FormReset />);
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Name",
      }),
      {
        target: {
          value: "Sunny",
        },
      }
    );
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Email",
      }),
      {
        target: {
          value: "sunny@sunny.com",
        },
      }
    );
  });
  test("should check the form input value render correctly and when submit button clikc the for reset", () => {
    render(<FormReset />);
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Name",
      }),
      {
        target: {
          value: "Sunny",
        },
      }
    );
    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Email",
      }),
      {
        target: {
          value: "sunny@sunny.com",
        },
      }
    );
    fireEvent.click(screen.getByRole('button',{
        name:'Submit'
    }))
    expect(screen.getByRole('textbox',{
        name:'Name'
    }).value).toBe('')
    expect(screen.getByRole('textbox',{
        name:'Email'
    }).value).toBe('')
  });
});
