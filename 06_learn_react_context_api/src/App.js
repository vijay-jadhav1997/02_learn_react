import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <div className="app p-5">
        <h1 className="text-center text-3xl font-bold">
          Learn React Context API here...
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
