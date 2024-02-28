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
// root.render(<App />);

const react_element = (props) => {
  return (
    <h1
      style={{
        margin: "50px 40px 0",
        padding: "10px",
        backgroundColor: "green",
        color: "#fff",
        boxShadow: "0 0 10px pink",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      ✨ Jay Shree Ram Krushna Hari 🙏🏻
    </h1>
  );
};

root.render({
  $$typeof: Symbol.for("react.element"),
  type: react_element,
  props: {},
  ref: null,
});

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: "h1",
//   ref: null,
//   props: {
//     children: "Jay Shree Ram",
//     style: {
//       margin: "50px 40px 0",
//       padding: "10px",
//       backgroundColor: "green",
//       color: "#fff",
//       boxShadow: "0 0 10px pink",
//       borderRadius: "20px",
//       textAlign: "center",
//     },
//   },
// });
