import React, { useState } from "react";

const UseStateHook = () => {
  const [title, setTitle] = useState("!! Jay Jay Ram Krushna Hari !!");

  function changeTitle() {
    // console.log(title);
    title.includes("Mauli")
      ? setTitle("!! Jay Jay Ram Krushna Hari !!")
      : setTitle("!! Shree Dnyanoba Mauli Tukaram !!");
  }

  return (
    <>
      <div className="flex flex-col gap-y-2 items-center w-4/5 border-4 border-pink-500 rounded-2xl px-5 py-3 mx-auto my-5">
        <h2 className="text-2xl font-bold shadow-2xl shadow-green-400">
          {title}
        </h2>
        <button
          className="px-5 py-2 rounded-md active:shadow-xl active:shadow-yellow-200 bg-sky-400 active:opacity-80 text-white text-lg font-semibold border border-sky-500 hover:text-sky-400 hover:bg-white"
          type="button"
          onClick={changeTitle}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default UseStateHook;
