import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {useRestaurantMenu} from "../utils/customHooks";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {

  const {resId} = useParams();
  // console.log(resId);

  const menuData = useRestaurantMenu(resId);
  // console.log(menuData);

  
  if(menuData === null) return <Shimmer />;
  
  const {name, areaName, costForTwoMessage, avgRating, cuisines, totalRatingsString, aggregatedDiscountInfo} = menuData?.data?.cards[0]?.card?.card?.info;
  const {offers} = menuData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  // const menuCards1 = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  // const menuCards2 = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  // const menuCards3 = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

  // console.log(menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(menuCards1);
  const menuCategories = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
    return (card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  })

// console.log(menuCategories);

  const OfferBox = ({offerData})=> {
    const {description, header, couponCode} = offerData?.info
    // console.log(offerData);
    return(
      <div className="offerBox border border-slate-400 rounded-lg px-3 py-2 w-max">
        <h4 className="min-w-max font-semibold ">{header}</h4>
        <p className="min-w-max text-slate-400 text-sm">{couponCode} | {description}</p>
      </div>
    )
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
          <p className="rating text-center text-green-400 font-semibold py-2">⭐ {avgRating}</p>
          <p className="totalRating text-center text-slate-400 text-[0.65rem] py-2">{totalRatingsString}</p>
        </div>
      </div>
      <div className="priceBox mb-2">
        <p className="font-semibold">💫 Currently <span className="border px-1.5 mr-2 rounded-full">₹</span> {costForTwoMessage}</p>
      </div>
      <div className="offerBoxContainer flex overflow-x-auto space-x-3 py-3 mb-10 scroll-smooth">
        {offers.map((offer) => {
          return(<OfferBox key={offer?.info?.offerIds[0]} offerData={offer}/>)
        })}
      </div>
      <div className="menuCardsContainer divide-y-4 divide-slate-400">

        {
          menuCategories.map((menuCategory) => {
            return (
              <MenuCategory key={menuCategory?.card?.card?.title} data={menuCategory?.card?.card} />
            )
          })
        }
      
        <div className="text-lg mb-3">
          {menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title +  " ("+ menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.length + ")"}
        </div>
        {/* {menuCards1.map((menu) => {
          return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
        })} */}
        {/* {menuCards3.map((menu) => {
          return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
        })} */}
        {/* {menuCards2.map((menu) => {
          return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
        })} */}
      </div>
    </div>
  )
}


export default RestaurantMenu;