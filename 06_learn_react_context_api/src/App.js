import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div className="app">This is simple react app.</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
