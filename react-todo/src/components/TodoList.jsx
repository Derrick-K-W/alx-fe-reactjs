import { useState } from "react";

// Static array of initial todos for demonstration
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a project", completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  };

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent toggling on delete click
              deleteTodo(todo.id);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
