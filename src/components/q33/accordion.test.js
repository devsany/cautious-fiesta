import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

describe("should check all the unit case of the Accordion component", () => {
  const sections = [
    {
      title: "title1",
      content: "content1",
    },
    {
      title: "title2",
      content: "content2",
    },
    {
      title: "title3",
      content: "content3",
    },
  ];
  test("should check the component render correctly", () => {
    render(<Accordion sections={sections} />);
    sections.forEach((section) => {
      expect(
        screen.getByRole("button", {
          name: section.title,
        })
      ).toBeInTheDocument();
    });
  });
  test("should check the apperence of accordion when the button click", () => {
    render(<Accordion sections={sections} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: sections[0].title,
      })
    );
    expect(screen.getByText(sections[0].content)).toBeInTheDocument();
  });
});
