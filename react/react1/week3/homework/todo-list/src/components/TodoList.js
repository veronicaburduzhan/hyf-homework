import React, { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem.js";
import dobby from "../data/dobby.gif";
import AddTodo from "./AddTodo.js";
import Border from "./Border";
import PropTypes from "prop-types";

export default function TodoList({ fetchUrl }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(fetchUrl);
      const fetchedTodo = await response.json(response);
      setTodoList(fetchedTodo);
    }
    fetchTodo();
  }, [fetchUrl]);

  function addTodo(description, deadline) {
    if (description === "" && deadline === null) {
      alert("Please, add some description and a deadline for your todo!");
      return;
    } else {
      let todoId;
      if (todoList.length === 0) {
        todoId = 1;
      } else {
        todoId = todoList[todoList.length - 1].id + 1;
      }
      console.log(todoList);
      return setTodoList((todoList) => [
        ...todoList,
        { id: todoId, description, deadline },
      ])
    };
  }


  //I have a problem with updating value (toDoList). My handleUpdate function gets a description from the input but we can only see the result of updating in console and not in the rendered list
  const handleUpdate = (id, description) => {
    const updatedTodoList = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.description = description;
        return { ...todo, description }
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodoList);
    console.log(description); //there is an actual updated description in console 
  }

  const deleteTodo = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const todos = todoList.map((todo, i) => {
    return (
      <Border key={todo.id}>
        <TodoListItem
          index={i}
          key={todo.id}
          description={todo.description}
          deadline={todo.deadline}
          handleUpdate={handleUpdate}
          handleDelete={() => deleteTodo(todo.id)}
        ></TodoListItem>
      </Border>
    );
  });

  return todos.length > 0 ? (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul className="todoListStyle"> {todos} </ul>
    </div>
  ) : (
    <div>
      <AddTodo addTodo={addTodo} />
      <p>No todo for you today!</p>
      <img src={dobby} alt="Dobby is free"></img>
    </div>
  );
}

TodoListItem.propTypes = {
  handleUpdate: PropTypes.func,
  description: PropTypes.string,
}