import { render, screen } from "@testing-library/react";
import ConditionalRender from "./ConditionalRender";

describe("Can you test if an element is hidden when a certain condition is false?", () => {
  test("should check the hidden propertiy", () => {
    render(<ConditionalRender isVisible={true} />);
    expect(screen.getByTestId("visible-element")).toBeInTheDocument();
  });

  test("should check the hidden propertiy when the isVisible is false", () => {
    render(<ConditionalRender isVisible={false} />);
    expect(screen.queryByTestId("visible-element")).not.toBeInTheDocument();
  });
});
