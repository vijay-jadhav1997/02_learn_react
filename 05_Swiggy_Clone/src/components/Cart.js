import { useDispatch, useSelector } from "react-redux";
import CartItemBox from "./CartItemBox";
import { useEffect, useState } from "react";
import { clearCart } from "../appStore/slices/cartSlice";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    cartItems.forEach((element) => {
      price += parseInt(element?.card?.info?.price);
    });
    setTotalPrice(price);
  }, [cartItems]);

  function handleClearAllItems() {
    dispatch(clearCart());
  }

  return cartItems.length === 0 ? (
    <div className="w-[90%] h-screen mx-auto flex flex-col gap-y-5 justify-center items-center text-white hover:bg-slate-300">
      <h1 className="text-white font-bold text-4xl mb-5">
        Hey, Your cart is empty!
      </h1>
      <h2 className="text-white font-semibold text-2xl">
        {" "}
        Please, Let's go, search, add something to your cart, purchase and enjoy
        your food!
      </h2>
    </div>
  ) : (
    <div className="w-[90%] max-w-[900px] pb-20 mt-28 mx-auto flex flex-col gap-y-5 justify-center items-center text-white">
      <div className="w-full flex justify-between items-center">
        <h2 className="py-5 w-full text-2xl text-white">
          Here is your all items...
        </h2>
        <button
          className="w-28 py-2 rounded-md hover:bg-red-600 bg-gray-400 "
          title="clear your cart!"
          onClick={handleClearAllItems}
        >
          Clear All
        </button>
      </div>
      {cartItems.map((item, index) => {
        return <CartItemBox key={index} menuData={item} />;
      })}
      <div className="mt-2 pt-5 border-t-2 border-t-slate-400 w-full">
        <p className="text-xl"> Total Price - ₹ {totalPrice / 100} only. </p>
      </div>
    </div>
  );
}
