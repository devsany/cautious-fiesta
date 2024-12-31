import { fireEvent, render, screen } from "@testing-library/react";
import GreetEnhanceWithErrorHandling from "./GreetEnhanceWithErrorHandling";

describe("should check all the functionality of greetehnacewitherror", () => {
  test("should check the error handling", () => {
    render(<GreetEnhanceWithErrorHandling name="Sunny" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Enter greet"), {
      target: {
        value: "Hii 🖐🏻 Sunny",
      },
    });
    expect(screen.getByRole("textbox").value).toBe("Hii 🖐🏻 Sunny");
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("Hii 🖐🏻 Sunny")).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Enter greet"), {
      target: {
        value: "",
      },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("Require")).toBeInTheDocument();
  });
});
