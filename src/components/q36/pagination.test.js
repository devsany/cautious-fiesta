import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("should check the paginati element", () => {
  test("should check the number of page and to apage rendr correctly", () => {
    render(
      <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} />
    );
    expect(screen.getByText("Page 1 of 10")).toBeInTheDocument();
  });
  test("should check the element increase the page when the button (Next) click", () => {
    render(
      <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} />
    );
    fireEvent.click(
      screen.getByRole("button", {
        name: "Next",
      })
    );
    expect(screen.getByText("Page 2 of 10")).toBeInTheDocument();
  });
  test("should check the element render correctly when the button (previous) click", () => {
    render(
      <Pagination totalPages={10} currentPage={3} onPageChange={() => {}} />
    );
    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
    expect(screen.getByText("Page 2 of 10")).toBeInTheDocument();
  });
  test('when the current page is 1, the "Previous" button should be disabled', () => {
    render(
      <Pagination totalPages={10} currentPage={1} onPageChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled();
  });
  test('when the current page is 10, the "Next" button should be disabled', () => {
    render(
      <Pagination totalPages={10} currentPage={10} onPageChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
  });
});
