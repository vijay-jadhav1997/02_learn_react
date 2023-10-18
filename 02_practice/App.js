import React from "react";
import  ReactDOM  from "react-dom/client";

// 
const heading = React.createElement("h1", {id:"heading"}, "!! Shree Dnyanoba Mauli Tukaram !!");

const nameInput = React.createElement("input", {id:"nameInput", placeholder:"Enter your name..."});

const addBtn = React.createElement("button", {id:"addBtn"}, "Add");


const inputBox = React.createElement('div', {id:'inputBox'}, nameInput, addBtn);

const parent = React.createElement('div', {id:'parent'}, heading, inputBox);


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(parent);