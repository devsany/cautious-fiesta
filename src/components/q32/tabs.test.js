import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "./Tabs";
import { act } from "react";
import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";

describe("should check the element of tab", () => {
  const tabs = [
    {
      activeTab: 0,
      label: "label0",
    },
    {
      activeTab: 1,
      label: "label1",
    },
    {
      activeTab: 2,
      label: "label3",
    },
  ];
  test("should check", () => {
    render(<Tabs tabs={tabs} />);
    tabs.forEach((tab) => {
      expect(
        screen.getByRole("button", { name: tab.label })
      ).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole("button", { name: tabs[1].label }));
    expect(screen.getByText(tabs[1].label)).toBeInTheDocument();
  });
});
