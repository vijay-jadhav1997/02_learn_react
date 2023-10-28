import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {MENU_IMG_URL, MENU_API} from "../utils/constants"

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  // const [offerData, setOfferData] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    try {
      const dataInJson = await fetch(MENU_API + resId );
      const data = await dataInJson.json();
      // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
      setMenuData(data?.data?.cards);
    } 
    catch (error) {
      console.log(error);
    }
  }
  
  if(menuData === null) return <Shimmer />;
  // console.log(menuData);
  
  const {name, areaName, costForTwoMessage, avgRating, cuisines, totalRatingsString, aggregatedDiscountInfo} = menuData[0]?.card?.card?.info;
  const {offers} = menuData[1]?.card?.card?.gridElements?.infoWithStyle;
  const menuCards1 = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const menuCards2 = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const menuCards3 = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
  // console.log(menuData[2]);
  // console.log(menuCards3);

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