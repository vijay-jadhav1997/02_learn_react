import React from "react";
// import { createContext } from "react";

const UserContext = React.createContext({
  loggedInUser: "default User",
});

export default UserContext;
