import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("add and filter phrases", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add phrase/i);
  fireEvent.change(input, { target: { value: "Hello world" } });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText("Hello world")).toBeInTheDocument();

  const search = screen.getByPlaceholderText(/search/i);
  fireEvent.change(search, { target: { value: "Hel" } });
  expect(screen.getByText("Hello world")).toBeInTheDocument();

  fireEvent.change(search, { target: { value: "xyz" } });
  expect(screen.queryByText("Hello world")).not.toBeInTheDocument();
});