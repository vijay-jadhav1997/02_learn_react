import { useSelector } from "react-redux";
import MenuCardBox from "./MenuCardBox";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-full h-screen flex flex-col gap-y-5 justify-center items-center text-white">
      {cartItems.map((item, index) => {
        return (
          <p key={index} className="text-xl font-bold">
            {item}
          </p>
        );
      })}
    </div>
  );
}
