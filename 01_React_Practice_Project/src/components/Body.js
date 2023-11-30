import RestaurantCard from "./RestaurantCard";
import resoList from  "../utils/mockData";

import { useState, useEffect } from "react";




// let resList = [...resoList];
let num = 1;


const Body = () => {
  const [resList, setResoLists] = useState([...resoList]);

  useEffect(() => {
    // console.log("!! Jay Hari !!");
    // fetchData();
  },[])

  console.log(useState('Jay Hari')[2]);
  console.log(`Body Rendered By React ${num} times`);
  num++; //* mutating the variable declared outside the scope(body) of component makes component impure which you must have to avoid in React Project.
  return (
    <div className="body">
      <div className="searchBox">
        <input className="searchInput" type="search" placeholder="Search here..." 
          onKeyUp={
            (event) => {
              let searchList;
              // console.log((event.target.value).toUpperCase())
              if(event.target.value.length != 0) {
                searchList = resoList.filter((restaurant) => {
                  // console.log((((restaurant.info?.name).toUpperCase()).includes((event.target.value).toUpperCase())))
                  return (((restaurant.info?.name).toUpperCase()).includes((event.target.value).toUpperCase()));
                })
              }
              else {
                searchList = [...resoList];
              }
              // console.log(searchList.length)
              setResoLists(searchList)
            }
          }
        />
        <button className="searchBtn" >Search</button>
      </div>
      <div className="filter_box">
        <button className="filter_btn"
          onClick={(event) => {
            let filteredList;
            event.target.classList.toggle('active');
            if(event.target.classList.length === 2) {
              filteredList = resList.filter(
                (restaurant) => {
                return (restaurant.info?.ratingNew?.ratings?.DELIVERY?.rating > 4)
                }
              )
              // console.log("if => jay hari!", `=> ${filteredList.length}`)
            } 
            else {
              filteredList = [...resoList]
              // console.log("else => jay hari!", `=> ${filteredList.length}`);
            }
            setResoLists(filteredList);

          }}
        >
        Top Rated Reastaurants</button>
      </div>
      <div className="heading_box">
        <h1>Delivery Restaurants in Mumbai</h1>
      </div>
      <div className="cardContainer">
        {resList.map((data) => {
          return <RestaurantCard key={data.info.resId} restaurantData ={data} />
        })}
      </div>
    </div>
  )
}

export default Body;