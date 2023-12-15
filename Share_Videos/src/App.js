import React from "react";
import jayShriRam from "react-dom/client";
import Header, { higherOrderFn } from "./components/Header";
import Video from "./components/Video";
import Person from "./components/Person";
import Man from "./components/Man";
import Prove from "./components/Prove";
import EventHandling from "./components/EventHandling";
import UseStateHook from "./components/UseStateHook";

const App = () => {
  console.log("App render..!!");

  const HigherOrderComponent = higherOrderFn(Header);

  return (
    <div className="app min-w-full h-full">
      <Header name={"Jay Hari Gurudev...!"} />
      <Video />
      <h1 className="text-center">!! Jay Jay Ram Krushna Hari !!</h1>
      <Person discription="!! Shree Dnyanoba Mauli Tukarm !!" />
      <Man />
      <Prove />
      <EventHandling />
      <UseStateHook />
      <hr className="my-6 py-1 bg-slate-600 rounded-md w-11/12 mx-auto shadow-md shadow-lime-400" />
      <HigherOrderComponent name="!! Shree Dnyanoba Mauli Tukaram !!" />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
const root = jayShriRam.createRoot(document.getElementById("root"));
root.render(<App />);
