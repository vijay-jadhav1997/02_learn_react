import React, { useState } from "react";

const Prove = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="prove mx-auto w-max py-5 shadow-lg shadow-lime-300 px-10 border-2 border-yellow-400 rounded-lg">
      <h3 className="text-lg w-max mx-auto py-3 px-5 ">
        !! Jay Jay Vitthal Rakhumai !!
      </h3>
      <div className="text-3xl border-4 my-5 border-yellow-500 m-1 rounded-full font-semibold px-4 py-2 w-max mx-auto">
        {count}
      </div>
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          className="text-lg text-green-500 font-semibold py-2 px-5 border-2 rounded-md border-green-500 hover:bg-green-500 hover:text-white cursor-pointer"
          onClick={() => {
            if (count >= 0) setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          type="button"
          className="text-lg text-red-600 font-semibold py-2 px-5 border-2 rounded-md border-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(count);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          className="text-lg text-cyan-500 font-semibold py-2 px-5 border-2 rounded-md border-cyan-500 hover:bg-cyan-500 hover:text-white cursor-pointer"
          onClick={() => {
            setCount(0);
          }}
        >
          Reverse
        </button>
      </div>
    </div>
  );
};

export default Prove;
