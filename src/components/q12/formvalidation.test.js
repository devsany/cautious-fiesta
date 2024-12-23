import { fireEvent, render, screen } from "@testing-library/react";
import FromValidation from "./FromValidation";

describe("Can you check if validation errors appear for invalid form inputs?", () => {
  test("should check the component render corerctly", () => {
    render(<FromValidation />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Name",
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: "Email",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
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

    expect(
      screen.getByRole("textbox", {
        name: "Name",
      }).value
    ).toBe("Sunny");
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
    expect(
      screen.getByRole("textbox", {
        name: "Email",
      }).value
    ).toBe("sunny@sunny.com");

    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Name",
      }),
      {
        target: {
          value: "",
        },
      }
    );
    // expect(
    //   screen.getByRole("textbox", {
    //     name: "Name",
    //   }).value
    // ).toBe("Sunny");

    fireEvent.change(
      screen.getByRole("textbox", {
        name: "Email",
      }),
      {
        target: {
          value: "",
        },
      }
    );
    // expect(
    //   screen.getByRole("textbox", {
    //     name: "Email",
    //   }).value
    // ).toBe("sunny@sunny.com");
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
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
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("required")).toBeInTheDocument();
  });
});
