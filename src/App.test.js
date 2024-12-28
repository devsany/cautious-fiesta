import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Helper function to render with router
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: MemoryRouter });
};

test("renders Home component by default", () => {
  renderWithRouter(<App />);
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

test("renders About component when navigating to /about", () => {
  renderWithRouter(<App />, { route: "/about" });
  expect(screen.getByText(/About Page/i)).toBeInTheDocument();
});

test("renders Contact component when navigating to /contact", () => {
  renderWithRouter(<App />, { route: "/contact" });
  expect(screen.getByText(/Contact Page/i)).toBeInTheDocument();
});

test("navigates to About page when About link is clicked", () => {
  renderWithRouter(<App />);
  fireEvent.click(screen.getByText(/About/i));
  expect(screen.getByText(/About Page/i)).toBeInTheDocument();
});

test("navigates to Contact page when Contact link is clicked", () => {
  renderWithRouter(<App />);
  fireEvent.click(screen.getByText(/Contact/i));
  expect(screen.getByText(/Contact Page/i)).toBeInTheDocument();
});
