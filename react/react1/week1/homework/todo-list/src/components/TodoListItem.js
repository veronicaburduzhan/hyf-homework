import React from "react";
export default function TodoListItem(props) {
  return (
    <li>
      {props.activity} - <span className="dateStyle">{props.date}</span>
    </li>
  );
}
