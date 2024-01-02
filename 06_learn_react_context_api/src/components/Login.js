import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function submitHandle() {
    if (userName !== "") {
      setUser({ userName, password });
    } else {
      alert("Please enter UserName....!");
    }
  }

  return (
    <div className="login_page flex flex-col items-center gap-10 w-[300px] h-[350px] p-5 mx-auto mt-10 border-4 border-blue-700 rounded-lg">
      <h2 className=" py-2 text-center text-2xl text-blue-950 font-bold">
        ✨Login ✨
      </h2>
      <div className="inputs">
        <input
          type="text"
          className="bg-slate-300 outline-none text-lg py-2 mb-2 px-3 rounded-md w-5/6"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName..."
        />
        <input
          type="password"
          className="bg-slate-300 outline-none text-lg py-2 px-3 rounded-md w-5/6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
      </div>
      <div className="buttons w-[100%] text-lg font-medium flex justify-between">
        <button
          type="submit"
          className="py-2 px-3 border bg-cyan-500 text-white  rounded-full w-[100px]"
          onClick={submitHandle}
        >
          LogIn
        </button>
        <button
          type="submit"
          className="py-2 px-3 border border-cyan-500 rounded-full w-[100px]"
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

export default Login;
