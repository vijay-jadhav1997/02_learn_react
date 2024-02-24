import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/customHooks";
import MenuCategory from "./MenuCategory";

import { FaStar } from "react-icons/fa6";
import { CgTimelapse } from "react-icons/cg";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const RestaurantMenu = () => {
  const [vegMenuOnly, setVegMenuOnly] = useState(false);

  const { resId } = useParams();
  // console.log(resId);

  const menuData = useRestaurantMenu(resId);
  // console.log(menuData);

  if (menuData === null) return <Shimmer />;
  // console.log(menuData?.data?.cards);
  console.log(menuData?.data?.cards.filter((data) => data?.card?.card?.info));
  const {
    name,
    areaName,
    costForTwoMessage,
    avgRating,
    cuisines,
    totalRatingsString,
    availability,
    veg,
  } = menuData?.data?.cards.filter((data) => data?.card?.card?.info)[0]?.card
    ?.card?.info;
  const { offers } = menuData?.data?.cards.filter(
    (data) => data?.card?.card?.gridElements?.infoWithStyle
  )[0]?.card?.card?.gridElements?.infoWithStyle;

  let pureVegData = menuData?.data?.cards.filter(
    (data) => data?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  console.log(pureVegData);

  const { isPureVeg } =
    pureVegData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) => data?.card?.card
    )[0]?.card?.card;

  const menuCategories =
    pureVegData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
      return (
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  // console.log(menuCategories);

  const OfferBox = ({ offerData }) => {
    const { description, header, couponCode } = offerData?.info;
    // console.log(offerData);
    return (
      <div className="offerBox border border-slate-400 rounded-lg px-3 py-2 w-max">
        <h4 className="min-w-max font-semibold ">{header}</h4>
        <p className="min-w-max text-slate-400 text-sm">
          {couponCode} | {description}
        </p>
      </div>
    );
  };

  function vegOnly() {
    setVegMenuOnly(!vegMenuOnly);
  }

  return (
    <div className="restaurantMenu mt-40 text-white mx-auto w-5/6 lg:w-3/5">
      <div className="restaurantHeader border-b border-dashed my-3 flex justify-between pb-3">
        <div className="restaurantAdress">
          <h3 className="font-semibold text-xl mb-2">{name}</h3>
          <p className="text-slate-400 text-sm">{cuisines.join(", ")}</p>
          <p className="text-slate-400 text-sm">{areaName}</p>
        </div>
        <div className="ratingBox border rounded-md border-slate-400 px-2 divide-y divide-slate-400">
          <p className="rating text-center text-green-400 font-semibold py-2 flex justify-center items-center">
            <FaStar /> <span className="ml-0.5">{avgRating}</span>
          </p>
          <p className="totalRating text-center text-slate-400 text-[0.65rem] py-2">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <div className="priceBox mb-2">
        <p className="font-semibold flex items-center">
          <span className="text-xl">
            <CgTimelapse />
          </span>{" "}
          <span className="mx-2">Currently</span>{" "}
          <span className="text-2xl">
            <HiOutlineCurrencyRupee />
          </span>{" "}
          <span className="mx-2">{costForTwoMessage}</span>
        </p>
      </div>
      <div className="offerBoxContainer flex overflow-x-auto space-x-3 py-3 mb-10 scroll-smooth">
        {offers.map((offer) => {
          return <OfferBox key={offer?.info?.offerIds[0]} offerData={offer} />;
        })}
      </div>
      <div className="isVegBox mb-2">
        {isPureVeg ? (
          <p className="py-4 border-b border-b-slate-400 pl-2">
            🌿 <span className="text-xs text-slate-300">PURE VEG</span>
          </p>
        ) : (
          <p className="py-4 flex items-center border-b border-b-slate-00 pl-2 text-slate-300">
            Veg Only
            <label
              htmlFor="vegOnly"
              className="ml-2 peer-checked:bg-white inline-block cursor-pointer relative bg-gray-200 w-14 rounded-full h-6"
            >
              <input
                type="checkBox"
                id="vegOnly"
                className="sr-only peer"
                onClick={vegOnly}
              />
              <span className="w-5 h-5 transition-all duration-600 bg-slate-400 absolute top-1/2 -translate-y-1/2 left-1 rounded-full peer-checked:bg-green-500 peer-checked:left-8"></span>
            </label>
          </p>
        )}
      </div>
      <div className="menuCardsContainer  divide-slate-500 divide-y-[17px]">
        {menuCategories.map((menuCategory, index) => {
          return (
            <MenuCategory
              key={menuCategory?.card?.card?.title}
              data={menuCategory?.card?.card}
              isVegInfo={vegMenuOnly}
              // accordion={index === showAccordion ? true : false}
              setShowAccordionFn={() => setShowAccordion(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
