import React from "react";
import TodoList from "./ToDo/TodoList";

function App() {
  let todos = [
    { id: 1, completed: false, title: "buy broad" },
    { id: 2, completed: false, title: "buy butter" },
    { id: 3, completed: false, title: "buy milk" },
  ];

  function toggleTodo(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
