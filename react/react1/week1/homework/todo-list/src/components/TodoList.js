import React from "react";
import TodoListItem from "./TodoListItem.js";
import TodoListData from "../data/todoList.js";

function TodoList() {
  return (
    <ul>
      {TodoListData.map((item) => {
          return <TodoListItem key={item.id} activity={item.activity} date={item.date} />;
      })}
    </ul>
  );
}

export default TodoList;
