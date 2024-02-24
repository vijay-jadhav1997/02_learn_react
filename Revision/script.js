// import React from "react";
// import ReactDOM from "react-dom";

// const { element } = require("prop-types");

const element = React.createElement("div", { className: "jay", id: "" }, [
  React.createElement("h1", { key: 1 }, "Jay Shree Ram Krushna Hari"),
  React.createElement("label", { key: 2, htmlFor: "name" }, "Name: "),
  React.createElement("input", {
    key: 3,
    id: "name",
    placeholder: "Enter your Full name",
  }),
  React.createElement("br", { key: 4 }),
  React.createElement("label", { key: 5, htmlFor: "age" }, "Age: "),
  React.createElement("input", {
    key: 6,
    id: "age",
    placeholder: "Enter your age",
  }),
  React.createElement("br", { key: 7 }),
]);

// const element = {
//   $$typeof: Symbol.for("react.element"),
//   type: "div",
//   key: null,
//   ref: null,
//   props: {
//     className: "jay",
//     id: "",
//     children: ["Jay Shree Ram"],
//   },
//   _owner: null,
//   _store: {},
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// ReactDOM.createRoot(document.querySelector("#root")).render({
//   $$typeof: Symbol.for("react.element"),
//   type: "div",
//   key: null,
//   ref: null,
//   props: {
//     className: "jay",
//     id: "",
//     children: [
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "ul",
//         props: {},
//         ref: null,
//         children: [
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "li",
//             props: { key: 2 },
//             ref: null,
//             children: "Jay Shree Ram",
//           },
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "li",
//             props: { key: 3 },
//             ref: null,
//             children: "Jay Shree Krushna",
//           },
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "li",
//             props: { key: 4 },
//             ref: null,
//             children: "Jay Shree Hari",
//           },
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "li",
//             props: { key: 5 },
//             children: "Jay Shree Radhe Radhe",
//             ref: null,
//           },
//           {
//             $$typeof: Symbol.for("react.element"),
//             type: "li",
//             props: { key: 6 },
//             ref: null,
//             children: "Jay Shree Dnyanoba Mauli Tukaram",
//           },
//         ],
//       },
//     ],
//   },
// });

// const divElem = document.createElement("div");
// divElem.className = "revision";
// divElem.innerText = "Jay Shree Ram Krushna Hari.....!";
// divElem.style = `text-align: center; background-color: yellow;`;
// const root1 = document.querySelector("#root");
// root1.appendChild(divElem);

// console.log(element);

// console.dir(element);
