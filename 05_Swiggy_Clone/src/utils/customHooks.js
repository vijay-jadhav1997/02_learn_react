import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [cardMenuInfo, setCardMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    try {
      const menuData = await fetch(MENU_API + resId );
      const menuDataJson = await menuData.json();
      // console.log(menuDataJson);
      setCardMenuInfo(menuDataJson);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (cardMenuInfo);
}

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  
  useEffect(()=> {
    fetchResList();
  },[]);

  const fetchResList  = async () => {
    try {
      const resListData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const resListDataJson = await resListData.json();
      console.log(resListDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantList(resListDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log(error);
    }
  }

  return restaurantList;
}

export  {useRestaurantMenu, useRestaurantList};