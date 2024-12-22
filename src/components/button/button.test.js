import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Button from "./Button";
import React, { useState, useTransition } from "react";

describe("Should check the button", () => {
  test("button component", async () => {
    const handleSubmit = () => {
      console.log("Data Submitted Successfully");
    };
    render(<Button label={"Submit"} onClick={handleSubmit} />);
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
  });
});
