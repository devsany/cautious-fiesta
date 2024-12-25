import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("should check the model element", () => {
  test("first check the open omdel button working or not", () => {
    render(<Modal title="Hello">Hello World</Modal>);
    expect(
      screen.getByRole("button", {
        name: "Open Modal",
      })
    ).toBeInTheDocument();
  });
  test("should check the modal open when the open modal button click", () => {
    render(<Modal title="Hello">Hello World</Modal>);
    fireEvent.click(screen.getByRole("button", { name: "Open Modal" }));
    expect(
      screen.getByRole("heading", {
        name: "Hello",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Close",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  test("should check the element when i close the the model disappear", () => {
    render(<Modal title="Hello">Hello World</Modal>);
    fireEvent.click(screen.getByRole("button", { name: "Open Modal" }));
    expect(
      screen.getByRole("heading", {
        name: "Hello",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Close",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Close",
      })
    );
    expect(screen.queryByText("Hello World")).not.toBeInTheDocument();
  });
});
