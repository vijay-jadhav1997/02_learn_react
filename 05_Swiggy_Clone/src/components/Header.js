import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  //* useState declare Local State Variable- which is Super Powerful variable:
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="bg-pink-400 z-50 fixed top-3 rounded left-[5%] right-[5%] lg:left-[10%] lg:right-[10%]">
      <div className="flex justify-between h-24 items-center">
        <div className="">
          <img className="w-24 h-20 mx-2 rounded-md " src={LOGO_URL} />
        </div>
        <div className="">
          <ul className="flex justify-between text-white font-medium">
            <li>
              <Link className="px-2 py-1 hover:border rounded-md" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="px-2 py-1 hover:border rounded-md" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="px-2 py-1 hover:border rounded-md" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="px-2 py-1 hover:border rounded-md" to="/cart">
                Cart- ({cartItems.length})
              </Link>
            </li>
            <li>
              <Link className="px-2 py-1 hover:border rounded-md" to="/grocery">
                Grocery Store
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:border"
            onClick={(event) => {
              btnName === "Login" ? setBtnName("Log out") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
        <div className="relative mx-1">
          <img
            className="w-16 h-16 rounded-[50%]"
            src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"
          />
          {/* <span className="absolute">Radhe Shyam</span> */}
        </div>
      </div>
      <div className="absolute text-white font-medium bottom-1 left-40">
        Online status: {isOnline ? `✅` : "🔴"}
      </div>
    </div>
  );
};

export default Header;
