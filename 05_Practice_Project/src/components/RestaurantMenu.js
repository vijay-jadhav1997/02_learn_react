import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {MENU_IMG_URL} from "../utils/constants"
import {useRestaurantMenu} from "../utils/customHooks";

const RestaurantMenu = () => {

  const {resId} = useParams();
  // console.log(resId);

  const menuData = useRestaurantMenu(resId);
  // console.log(menuData);

  
  if(menuData === null) return <Shimmer />;
  
  const {name, areaName, costForTwoMessage, avgRating, cuisines, totalRatingsString, aggregatedDiscountInfo} = menuData?.data?.cards[0]?.card?.card?.info;
  const {offers} = menuData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const menuCards1 = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const menuCards2 = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const menuCards3 = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

  const OfferBox = ({offerData})=> {
    const {description, header, couponCode} = offerData?.info
    // console.log(offerData);
    return(
      <div className="offerBox">
        <h4>{header}</h4>
        <p>{couponCode} | {description}</p>
      </div>
    )
  }
  const MenuCardBox = ({menuData})=> {
    const {name, description, price, defaultPrice, imageId} = menuData?.card?.info
    // console.log(offerData);
    return(
      <div className="menuCardBox">
        <div className="menuTitleBox">
          <h4>{name}</h4>
          <p className="menuPrice">₹{price/100 || defaultPrice/100}</p>
          <p className="menuDescription">{description}</p>
        </div>
        <div className="menuImgBox">
          <img src={MENU_IMG_URL + imageId} alt={name} />
          <p>Customisable</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="restaurantMenu">
      <div className="restaurantHeader">
        <div className="restaurantAdress">
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
        <div className="ratingBox">
          <p className="rating">⭐ {avgRating}</p>
          <p className="totalRating">{totalRatingsString}</p>
        </div>
      </div>
      <div className="priceBox">
        <p>💫 Currently  <span>₹</span> {costForTwoMessage}</p>
      </div>
      <div className="offerBoxContainer">
        {offers.map((offer) => {
          return(<OfferBox key={offer?.info?.offerIds[0]} offerData={offer}/>)
        })}
      </div>
      <div className="menuCardsContainer">
        {menuCards1.map((menu) => {
          return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
        })}
        {/* {menuCards3.map((menu) => {
          return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
        })} */}
        {menuCards2.map((menu) => {
          return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
        })}
      </div>
    </div>
  )
}


export default RestaurantMenu;