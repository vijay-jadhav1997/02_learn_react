import React from "react";

const TodoInput = () => {
  return (
    <div className="todo-input">
      <div className="todo-title">
        <label htmlFor="input-title">Title</label>
        <input
          type="text"
          className="input-title"
          placeholder="Enter the Task Title..."
        />
      </div>
      <div className="todo-discription">
        <label htmlFor="input-discription">Discription</label>
        <input
          type="text"
          className="input-discription"
          placeholder="Enter the Task discription..."
        />
      </div>
      <div className="todo-input-item">
        <button type="button" className="addBtn">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
