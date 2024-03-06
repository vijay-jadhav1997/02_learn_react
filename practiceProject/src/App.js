import React from "react";
import ReactDOM from "react-dom/client";

import CounterApples from "./components/CounterApples";

const App = () => {
  return (
    <div className="app">
      <h1>Jay Jay Ram Krushna Hari</h1>
      <CounterApples />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
