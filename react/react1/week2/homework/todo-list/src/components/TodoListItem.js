import React, { useState } from "react";
import "../index.css";

export default function TodoListItem({ description, handleDelete }) {
  const [checked, setCheckedTodoItem] = useState(false);

  const changeTodoItemStyle = (e) => {
    setCheckedTodoItem(e.target.checked);
  };
  const isChecked = (item) => (item ? "checkedTodo" : "uncheckedTodo");

  return (
      <li className={isChecked(checked)}>
        <div>
          <input
            type="checkbox"
            onChange={changeTodoItemStyle}
            className="checkboxStyle"
          ></input>
          {description}
        </div>
        <div>
          <button className="buttonStyle buttonDeleteStyle" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
  );
}
