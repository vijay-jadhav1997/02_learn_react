


import RestaurantCard from "./RestaurantCard";
import resoList from  "../utils/mockData";



const Body = () => {
  return (
    <div className="body">
      <div className="searchBox">
        <input className="searchInput" type="search" placeholder="Search here..." />
        <button className="searchBtn" >Search</button>
      </div>
      <div className="cardContainer">
       {/* <RestaurantCard restaurantData={resoList[0]}/> */}
        {resoList.map((data) => {
          return <RestaurantCard key={data.info.resId} restaurantData ={data} />
        })}
      </div>
    </div>
  )
}

export default Body;