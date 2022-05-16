import React from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import Timer from "../components/Timer";

export default function TodoContainer() {
  return (
    <div>
      <TodoHeader />
      <Timer />
      <TodoList />
    </div>
  );
}
