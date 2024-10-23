// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Write tests' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Initially not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Toggle to complete
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle to incomplete
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build a Todo App');
    const deleteButton = todoItem.nextSibling; // Get the delete button next to the todo text

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
