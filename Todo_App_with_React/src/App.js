import React from "react";
import ReactDOM from "react-dom/client";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <div className="app border mx-5 my-4 px-3 py-3">
        <header className="">
          <h1 className="mx-auto min-w-max text-center">
            !! Shree Dnyanoba Mauli Tukaram !!
          </h1>
        </header>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

// ReactDOM.render(<App></App>, document.getElementById("root"));
