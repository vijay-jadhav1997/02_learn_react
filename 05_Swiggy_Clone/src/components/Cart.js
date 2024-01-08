import { useSelector } from "react-redux";
import MenuCardBox from "./MenuCardBox";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="w-[90%] h-screen mx-auto flex flex-col gap-y-5 justify-center items-center text-white">
      {cartItems.map((item, index) => {
        return <MenuCardBox key={item?.card?.info?.id} menuData={item} />;
      })}
    </div>
  );
}
