import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import restaurantsList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useRestaurantList } from "../utils/customHooks";
import UserContext from "../utils/UserContext";

const Body = () => {
  //* useState declare/create Local State Variable- Super Powerful variable:
  const [resList, setResList] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [userName1, setUserName1] = useState("");

  const { loggedInUser, userName, setUserName } = useContext(UserContext);

  const fetchResList = async () => {
    try {
      const resListData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const resListDataJson = await resListData.json();
      // console.log(resListDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const listData = resListDataJson?.data?.cards.filter(
        (restList) =>
          restList?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      // console.log(listData);
      setResList([
        ...listData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        ...listData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      ]);
      setFilteredList(
        listData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResList();
  }, []);

  const RestaurantCardPromoted = withVegLabel(RestaurantCard);
  // console.log(resList);

  //* Conditional rendering:
  return resList === null ? (
    <Shimmer />
  ) : (
    <div className="mt-36 text-white">
      <div className="w-max mx-auto my-2 px-5 py-2 bg-pink-400 rounded-md text-lg font-semibold">
        <input
          type="text"
          className="my-2 py-1 px-3 indent-2 rounded-md outline-none text-blue-900"
          value={userName1}
          onChange={(e) => setUserName1(e.target.value)}
          placeholder="Enter your name here..."
        />
        <button
          className="border border-white py-1 px-3 mx-2 rounded-lg hover:text-pink-400 hover:bg-white active:shadow-lg active:shadow-rose-600"
          onClick={() => setUserName(userName1)}
        >
          add name
        </button>
        <p> {loggedInUser}</p>
      </div>
      <div className="bg-slate-400 py-1 mx-auto rounded-md w-max">
        <input
          className="outline-none bg-transparent indent-3 w-[50vw] placeholder:text-white"
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="mx-2 bg-gray-200 px-4 py-2 text-gray-800 rounded-md hover:text-gray-100 hover:bg-transparent hover:border active:opacity-60 font-medium"
          onClick={() => {
            // console.log(searchText);
            let searchList;

            if (searchText.length !== 0) {
              searchList = resList.filter((restaurant) => {
                // console.log((((restaurant.info?.name).toUpperCase()).includes((event.target.value).toUpperCase())))
                return (restaurant.info?.name)
                  .toUpperCase()
                  .includes(searchText.toUpperCase());
              });
            } else {
              searchList = [...resList];
            }

            setFilteredList(searchList);
          }}
        >
          Search
        </button>
      </div>

      <div className="border mt-4 p-3 rounded-md mx-[5%] xl:mx-[9%]">
        <button
          className="bg-slate-500 px-3 py-2 rounded-md hover:opacity-90"
          onClick={(event) => {
            event.target.classList.toggle("active");
            let filterList;

            if (event.target.classList.length === 2) {
              filterList = resList.filter((restaurant) => {
                return restaurant.info?.avgRating > 4;
              });
              setFilteredList(filterList);
              // console.log("if => jay hari!", `${filteredList.length}`)
            } else {
              setFilteredList(resList);
              // console.log("else => jay hari!", `${filteredList.length}`);
            }
          }}
        >
          Top Rated Reastaurants
        </button>
      </div>
      <div className="mx-[5%] xl:mx-[9%] mt-3 text-xl">
        <h1>Delivery Restaurants in Koramangala</h1>
      </div>
      <div className="flex gap-y-5 mt-5 flex-wrap justify-around mx-[5%] xl:mx-[9%]">
        {filteredList.map((data) => {
          return (
            <Link
              key={data?.info?.id}
              to={"/restaurants/" + data?.info?.id}
              style={{ textDecoration: "none" }}
            >
              {data?.info?.veg ? (
                <RestaurantCardPromoted restaurantData={data} />
              ) : (
                <RestaurantCard restaurantData={data} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
