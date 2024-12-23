import React from "react";

function TodoList({ tasks }) {
  return (
    <div>
      <h1>Todo List</h1>
      {tasks.length > 0 ? (
        <ul role="list">
          {tasks.map((task, index) => (
            <li key={index} role="listitem">
              {task}
            </li>
          ))}
        </ul>
      ) : (
        <p role="alert">No tasks available</p>
      )}
    </div>
  );
}

export default TodoList;
