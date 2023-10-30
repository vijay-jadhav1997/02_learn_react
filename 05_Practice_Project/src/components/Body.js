import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import restaurantsList from "../utils/mockData";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useRestaurantList } from "../utils/customHooks";


const Body = () => {
  //* useState declare/create Local State Variable- Super Powerful variable:
  const [resList, setResList] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  
  // const resList = useRestaurantList();
  // setFilteredList(resList);
  // console.log(resList);
 
  useEffect(()=>{
    fetchResList();
  },[]);

  const fetchResList  = async () => {
    try {
      const resListData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const resListDataJson = await resListData.json();
      // console.log(resListDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setResList(resListDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(resListDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  
  //* Conditional rendering:
  return resList === null ?  <Shimmer /> : (
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
          return (
            <Link 
              key={data.info.id}
              to={"/restaurants/" + data.info.id}
              style={{textDecoration:"none"}}
            >
              <RestaurantCard restaurantData ={data} />
            </Link>
          ) 
        })}
      </div>
    </div>
  )
}

export default Body;