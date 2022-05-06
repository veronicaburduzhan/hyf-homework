import React, { useState } from "react";
import { TodoListData, ExtraTasks } from "../data/TodoListData";
import TodoListItem from "./TodoListItem.js";
import dobby from "../data/dobby.gif";

export default function TodoList() {
  const [todoList, setTodosState] = useState(TodoListData);

  const addRandomTodo = () => {
    const randomTodo =
      ExtraTasks[Math.floor(Math.random() * ExtraTasks.length)];
    let randomId;
    if (todoList.length === 0) {
      randomId = 1;
    } else {
      randomId = todoList[todoList.length - 1].id + 1;
    }
    const newTodo = {
      id: randomId,
      description: randomTodo,
    };
    const todoListWithNewTodo = setTodosState((todoList) => [
      ...todoList,
      newTodo,
    ]);

    return todoListWithNewTodo;
  };
  const deleteTodo = (id) => {
    setTodosState((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const todos = todoList.map((todo, i) => {
    return (
      <TodoListItem
        index={i}
        key={todo.id}
        description={todo.description}
        handleDelete={() => deleteTodo(todo.id)}
      ></TodoListItem>
    );
  });

  return todos.length > 0 ? (
    <div>
      <button className="buttonStyle" onClick={addRandomTodo}>
        Add New Todo
      </button>
      <ul className="todoListStyle"> {todos} </ul>
    </div>
  ) : (
    <div>
      <button className="buttonStyle" onClick={addRandomTodo}>
        Add New Todo
      </button>
      <p>No todo for you today!</p>
      <img src={dobby} alt="Dobby is free"></img>
    </div>
  );
}
