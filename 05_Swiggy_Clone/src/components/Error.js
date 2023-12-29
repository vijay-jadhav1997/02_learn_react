import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="error flex flex-col justify-center items-center bg-slate-300 shadow-lg shadow-gray-300 rounded-lg">
      <h1 className="text-2xl font-semibold">💫 Oops....! 🤸🏻‍♀️🤸🏻‍♂️💭</h1>
      <h2 className="text-red-600 text-lg">Something went wrong... 😷🤒 </h2>
      <h3 className="text-lg">
        {err.status}: {err.statusText} 🔎
      </h3>
    </div>
  );
};

export default Error;
