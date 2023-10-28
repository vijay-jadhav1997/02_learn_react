


import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import restaurantsList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {
  //* useState declare/create Local State Variable- Super Powerful variable:
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body rendered just!");

  useEffect(() => {
    fechResList();
  },[]);

  const fechResList = async() => {
    //* promise error handling with async()- await & try-catch:
    try {
      
      const listData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await listData.json();
      // console.log(jsonData?.data?.cards);

      setResList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      // setResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      console.log(error);
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
  
  //* Conditional rendering:
  if (resList.length === 0) {
    // return <Shimmer />;
    // return (restaurantsList.map((data) => {
    //   return <RestaurantCard key={data.info.id} restaurantData ={data} />
    //   })
    // )
  }
  
  //* Conditional rendering:
  return resList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="searchBox">
        <input className="searchInput" type="text" placeholder="Search here..." 
          value={searchText}
          onChange={
            (event) => {
              setSearchText(event.target.value)
            }
            
          }
        />
        <button className="searchBtn"
          onClick={() => {
            console.log(searchText)
            let searchList;

            if(searchText.length !== 0) {
              searchList = resList.filter((restaurant) => {
                // console.log((((restaurant.info?.name).toUpperCase()).includes((event.target.value).toUpperCase())))
                return ((restaurant.info?.name).toUpperCase().includes(searchText.toUpperCase()));
              })
            }
            else{
              searchList = [...resList];
            }
            
            setFilteredList(searchList);

          }}
        >Search</button>
      </div>

      <div className="filter_box">
        <button className="filter_btn"
          onClick={(event) => {
            event.target.classList.toggle('active');
            let filterList;
            
            if(event.target.classList.length === 2 ) {
              filterList = resList.filter(
                (restaurant) => {
                  return (restaurant.info?.avgRating > 4)
                }
              )
              setFilteredList(filterList);
              // console.log("if => jay hari!", `${filteredList.length}`)
            } 
            else {
              setFilteredList(resList);
              // console.log("else => jay hari!", `${filteredList.length}`);
            }
          }}
        >
        Top Rated Reastaurants</button>
      </div>
      <div className="heading_box">
        <h1>Delivery Restaurants in Koramangala</h1>
      </div>
      <div className="cardContainer">
       
        {filteredList.map((data) => {
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