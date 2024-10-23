import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import TodoList from "../components/TodoList"; // Adjust the path accordingly

describe("TodoList Component", () => {
  // Initial render test
  test("renders the initial todo list", () => {
    render(<TodoList />);
    
    // Check for initial todos
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/learn jest/i)).toBeInTheDocument();
  });

  // Test adding a new todo
  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add new todo/i);
    const addButton = screen.getByText(/add todo/i);
    
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);
    
    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  // Test toggling a todo
  test("toggles todo completion", () => {
    render(<TodoList />);
    
    const todo = screen.getByText(/learn react/i);
    fireEvent.click(todo);
    
    expect(todo).toHaveStyle("text-decoration: line-through");
    
    // Toggle it back
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  // Test deleting a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    
    const todo = screen.getByText(/learn react/i);
    const deleteButton = screen.getByText(/delete/i);
    
    fireEvent.click(deleteButton);
    
    expect(todo).not.toBeInTheDocument();
  });
});
