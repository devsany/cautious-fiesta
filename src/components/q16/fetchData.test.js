import { render, screen, waitFor } from "@testing-library/react";
import FetchData from "./FetchData";

describe("should check the api of the component", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Title 1" },
          { id: 2, title: "Title 2" },
        ]),
    })
  );
  test("should check the api render correctly", async () => {
    render(<FetchData />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("Title 1");
    });
  });
});
