import { fireEvent, render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe("should check the component Carousel", () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/152",
    "https://via.placeholder.com/153",
  ];
  test("should check the apperence of first image", () => {
    render(<Carousel images={images} />);
    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
  });
  test("should check the next image appear when i click on next button", () => {
    render(<Carousel images={images} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Next",
      })
    );
    expect(screen.getByAltText("Slide 2")).toBeInTheDocument();
  });

  test("should check the previous image when the previous button click", () => {
    render(<Carousel images={images} />);
    fireEvent.click(
      screen.getByRole("button", {
        name: "Previous",
      })
    );
    expect(screen.getByAltText("Slide 3")).toBeInTheDocument();
  });
});
