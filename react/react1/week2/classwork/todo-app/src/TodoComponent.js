import React, { useState } from "react";
import ReactDOM from "react-dom";

const initTodos = [
  {
    id: 1,
    text: "clean room",
  },
  {
    id: 2,
    text: "do pushups",
  },
];

export function TodoList() {
  const [todosState, setTodosState] = useState(initTodos);

  const addTodo = () => {
    setTodosState((prevTodos) => {
      const newTodo = {
        text: "learn React",
        id: prevTodos[prevTodos.length - 1].id + 1,
      };
      return [...prevTodos, newTodo];
    });
  };

  const todoItems = todosState.map((todo) => (
    <TodoItem key={todo.id} id={todo.id} text={todo.text}></TodoItem>
  ));

  return (
    <div className="App">
      <button onClick={addTodo}>Add todo</button>
      {todoItems}
    </div>
  );
}

function TodoItem({ text, id }) {
  return (
    <li>
      {id} - {text}
    </li>
  );
}
