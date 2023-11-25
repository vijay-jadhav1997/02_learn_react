import React from "react";
import jayShriRam from "react-dom/client";
import Header from "./components/Header";
import Video from "./components/Video";
import Person from "./components/Person";
import Man from "./components/Man";
import Prove from "./components/Prove";
import EventHandling from "./components/EventHandling";

const App = () => {
  console.log("App render..!!");
  return (
    <div className="app min-w-full h-full">
      <Header />
      <Video />
      <h1 className="text-center">!! Jay Jay Ram Krushna Hari !!</h1>
      <Person discription="!! Shree Dnyanoba Mauli Tukarm !!" />
      <Man />
      <Prove />
      <EventHandling />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
const root = jayShriRam.createRoot(document.getElementById("root"));
root.render(<App />);
