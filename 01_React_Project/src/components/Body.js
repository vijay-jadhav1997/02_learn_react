import RestaurantCard from "./RestaurantCard";
import resoList from  "../utils/mockData";

import { useState } from "react";




// let resoLists = [...resoList];


const Body = () => {
  const [resoLists, setResoLists] = useState([...resoList])
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
              filteredList = resoLists.filter(
                (restaurant) => {
                return (restaurant.info?.ratingNew?.ratings?.DELIVERY?.rating > 4)
                }
              )
              console.log("if => jay hari!")
            } 
            else {
              filteredList = resoLists;
              // event.target.classList.toggle('active');
              setResoLists(filteredList);
              console.log("else => jay hari!");
            }
            console.log(filteredList.length)
          }}
        >
        Top Rated Reastaurants</button>
      </div>
      <div className="heading_box">
        <h1>Delivery Restaurants in Mumbai</h1>
      </div>
      <div className="cardContainer">
        {resoLists.map((data) => {
          return <RestaurantCard key={data.info.resId} restaurantData ={data} />
        })}
      </div>
    </div>
  )
}

export default Body;