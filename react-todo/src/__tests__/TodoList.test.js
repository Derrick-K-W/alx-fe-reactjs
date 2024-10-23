import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Import jest-dom

import TodoList from "../components/TodoList"; // Add the missing slash


// Initial render test
test("renders the initial todo list", () => {
  render(<TodoList />);

  // Check for initial todos
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/learn jest/i)).toBeInTheDocument();
  expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
});

// Test adding a new todo
test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByRole("textbox");
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: "new todo" } });
  fireEvent.click(addButton);

  // Check if the new todo is added
  expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});

// Test toggling a todo
test("toggles todo completion", () => {
  render(<TodoList />);

  const todo = screen.getByText(/learn react/i);
  fireEvent.click(todo); // Assuming clicking toggles the completion

  // Check if the todo is toggled (completed)
  expect(todo).toHaveStyle("text-decoration: line-through");
});

// Test deleting a todo
test("deletes a todo", () => {
  render(<TodoList />);

  const todos = screen.getAllByText(/delete/i);
  const deleteButton = todos[0]; // Get the first delete button
  fireEvent.click(deleteButton);
});
