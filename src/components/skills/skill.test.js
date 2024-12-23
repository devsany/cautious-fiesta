import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skill", () => {
  const skill = ["HTML", "CSS", "JAVASCRIPT"];
  test("should check the element render correctly", () => {
    render(<Skills skill={skill} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(skill.length);
  });
  test("should check the element correctly", () => {
    render(<Skills skill={skill} />);
    skill.forEach((item) => {
      expect(
        screen.getByText(
          (content) => content.toLowerCase() === item.toLowerCase()
        )
      ).toBeInTheDocument();
    });
  });
  test("should check the login button", () => {
    render(<Skills skill={skill} />);

    expect(
      screen.getByRole("button", {
        name: "Login",
      })
    ).toBeInTheDocument();
  });
  test("should check the Start learning button", () => {
    render(<Skills skill={skill} />);
    expect(
      screen.queryByRole("button", {
        name: "Strat learning",
      })
    ).not.toBeInTheDocument();
  });
});
