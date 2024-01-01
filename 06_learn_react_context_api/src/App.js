import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app">
      <h1>Learn React Context API here...</h1>
      <Login />
      <Profile />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
