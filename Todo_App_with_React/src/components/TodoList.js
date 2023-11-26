import React from "react";

const TodoList = () => {
  return (
    <div className="todoList-container">
      <div className="buttons">
        <button type="button">Todo</button>
        <button type="button">Completed</button>
      </div>
      <div className="todoList">
        <div className="todo-input">
          <h3>Task 1</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
