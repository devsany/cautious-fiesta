import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);
  const handleDeleteTodo = (index) => {
    const newItem = item.filter((item, i) => i !== index);
    setItem(newItem);
  };
  const handleSubmit = (e) => {
    setItem([...item, todo]);
    setTodo("");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Item name"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        {item &&
          item.map((item, index) => {
            return (
              <>
                <li key={index}>{item}</li>
                <button onClick={() => handleDeleteTodo(index)}>
                  Remove Todo
                </button>
              </>
            );
          })}{" "}
      </div>
    </div>
  );
};

export default TodoList;
