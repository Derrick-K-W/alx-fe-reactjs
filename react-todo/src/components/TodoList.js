import React, { useState } from "react";

// Sample initial todos (static array)
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Jest", completed: false },
  { id: 3, text: "Build a Todo App", completed: false },
];

const TodoList = () => {
  // Component state to manage todos
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  // Handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() === "") return; // Avoid adding empty todos
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo(""); // Clear the input
  };

  // Handle toggling a todo (completed or not completed)
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle deleting a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
