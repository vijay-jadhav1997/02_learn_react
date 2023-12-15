import shree from "../assets/shree_Mauli.jpg";

const Header = ({ name }) => {
  return (
    <>
      <div className="header w-3/4 mx-auto my-5 text-center text-2xl font-bold border rounded-lg hover:shadow-md hover:bg-pink-600/80 hover:text-white hover:shadow-green-400 px-5 py-2">
        {name}
      </div>
    </>
  );
};

export default Header;

export const higherOrderFn = (Header) => {
  return ({ name }) => {
    return (
      <div className="loginCheck flex flex-col justify-center items-center gap-y-4 p-10 w-max mx-auto my-10 rounded-xl border border-lime-500">
        <img
          src={shree}
          alt=""
          className="w-40 h-40 rounded-full p-2 border-2 border-blue-900/70"
        />
        <Header name={name} />
      </div>
    );
  };
};
