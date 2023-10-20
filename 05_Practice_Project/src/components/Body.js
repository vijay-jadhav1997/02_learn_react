


import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import restaurantsList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {
  const [resList, setResList] = useState([]);


  useEffect(() => {
    fechResList();
  });

  const fechResList = async() => {
    //* promise error handling with async()- await & try-catch:
    try {
      
      const listData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await listData.json();
      console.log(jsonData?.data?.cards);

      setResList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // setResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      
    }

    //* promise error handling using .then().catch()
    // const listData =  fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // );

    // listData.then((response) =>{
    //   return response;
    // })
    // .then((jsonData) => {
    //   return jsonData.json();
    // })
    // .then((list) => {
    //   setResList(list?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })


    // const jsonData =  listData.json();
    // console.log(jsonData?.data?.cards);

    // setResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  
  if (resList.length === 0) {
    return <Shimmer />;
    // return (restaurantsList.map((data) => {
    //   return <RestaurantCard key={data.info.id} restaurantData ={data} />
    //   })
    // )
  }
  
  return (
    <div className="body">
      <div className="searchBox">
        <input className="searchInput" type="search" placeholder="Search here..." />
        <button className="searchBtn" >Search</button>
      </div>

      <div className="filter_box">
        <button className="filter_btn"
          onClick={(event) => {
            let filteredList;
            
            if(event.target.classList.toggle('active') === true) {
              // event.target.classList.toggle('active');
              filteredList = resList.filter(
                (restaurant) => {
                  console.log(restaurant.info?.avgRating)
                return (restaurant.info?.avgRating > 4)
                }
              )
              setResList(filteredList);
              console.log("if => jay hari!")
            } 
            else {
              setResList(resList);
              console.log("else => jay hari!");
            }
          }}
        >
        Top Rated Reastaurants</button>
      </div>
      <div className="heading_box">
        <h1>Delivery Restaurants in Koromandalam</h1>
      </div>
      <div className="cardContainer">
       
        {resList.map((data) => {
          return <RestaurantCard key={data.info.id} restaurantData ={data} />
        })}
        {/* {restaurantsList.map((data) => {
          return <RestaurantCard key={data.info.id} restaurantData ={data} />
        })} */}
      </div>
    </div>
  )
}

export default Body;