import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div className="app">
      <h1>!! Jay Hind !!</h1>
      <Accordion />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
