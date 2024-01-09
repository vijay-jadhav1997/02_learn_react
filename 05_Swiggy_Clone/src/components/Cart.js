import { useSelector } from "react-redux";
import CartItemBox from "./CartItemBox";
import { useEffect, useState } from "react";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  useEffect(() => {
    let price = 0;
    cartItems.forEach((element) => {
      price += parseInt(element?.card?.info?.price);
    });
    setTotalPrice(price);
  }, [cartItems]);

  return cartItems.length === 0 ? (
    <div className="w-[90%] h-screen mx-auto flex flex-col gap-y-5 justify-center items-center text-white">
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
      <h2 className="py-5 w-full text-2xl text-white">
        Here is your all items...
      </h2>
      {cartItems.map((item, index) => {
        return <CartItemBox key={index} menuData={item} />;
      })}
      <div className="mt-2 pt-5 border-t-2 border-t-slate-400 w-full">
        <p> Total Price - ₹ {totalPrice / 100} only. </p>
      </div>
    </div>
  );
}
