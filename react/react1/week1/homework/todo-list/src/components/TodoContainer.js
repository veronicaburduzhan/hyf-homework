import React from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

export default function TodoContainer() {
  return (
    <div>
      <TodoHeader />
      <TodoList />
    </div>
  );
}
