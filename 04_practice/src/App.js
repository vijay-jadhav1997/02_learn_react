import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Todo from "./components/Todo"
import Body from "./components/Body"

/**
 * header:
 *  -Logo
 *  -nav Items
 * 
 * Body:
 *  -search_inputBox
 *      -search_iput
 *      -search_Btn
 *  - Restaurant_container
 *      -RestaurantCards
 *      
 * Footer:
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 * 
 */




// const RestaurantCard = (props) => {
//   const {imgAddress,restName, rating, cuisine, location} = props;
//   return (
//     <div className="restaurantCard">
//       <img src={props.imgAddress} />

//       <div className="cardDetails">
//         <h3>{props.restName}</h3>
//         <span>{props.rating} Star</span>
//         <p>{props.cuisine}</p>
//         <span>{props.location}</span>
//       </div>
//     </div>

//   );
// }


// console.log(restaurantsList[0].info.cloudinaryImageId);

//* while looping in React:
//* not using keys (not acceptable) <<<<< index as key (if unique id is not available) <<<<<<< unique id as key (best practice)




//* Below we used hardcore data which is bad practice
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="searchBox">
//         <input className="searchInput" type="search" placeholder="Search here..." />
//         <button className="searchBtn" >Search</button>
//       </div>
//       <div className="cardContainer">
//         <RestaurantCard restName="Soul Rasa" rating="4.3" cuisine="Indian, Healthy, Home Food" location="Seshadripuram" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hpp3mkis0pmjvnvqt8pl"/>
//         <RestaurantCard restName="Andhra Gunpowder" rating="4.4" cuisine="Andhra, Biryani, South Indian" location="Seshadripuram" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bs9qgsy25pn07pzn6xx1"/>
//         <RestaurantCard restName="Nandhana Palace" rating="4.2" cuisine="Biryani, Andhra, South Inadian, North Indian" location="Rajajinagar" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/195876a3181ef63f76e45e3a7b49b585"/>
//         <RestaurantCard restName="Kranti Sweets" rating="4.2" cuisine="Sweets" location="Alankar Plaza" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dhcdvnp6oohqaenixza2"/>
//         <RestaurantCard restName="KFC" rating="4.1" cuisine="Burgers, Biryani, American, Snacks, Fast Foods" location="Basavanagudi" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"/>
//         <RestaurantCard restName="Domino's Pizza" rating="4" cuisine="Pizzas, Italian, Pastas, Desserts" location="Basavanagudi" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gt1qlbsgaklbzlg0olga"/>
//         <RestaurantCard restName="McDonald's" rating="4.2" cuisine="Burgers, Beverages, Cafe, Desserts" location="Ashok Nagar" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6"/>
//         <RestaurantCard restName="Theobroma" rating="4.5" cuisine="Bakery, Desserts" location="Vijay Nagar" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b033728dcb0101ceb19bff0e1e1f6474"/>
//         <RestaurantCard restName="Hotel Empire" rating="4.2" cuisine="North Indian, Biryani, Kebabs" location="Jayanagar" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r4mw2xp0djz0pscwmiop"/>
//         <RestaurantCard restName="Subway" rating="4.2" cuisine="Salads, Snaks, Desserts, Beverages" location="Basavanagudi" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"/>
//         <RestaurantCard restName="A2B - Adyar Ananda Bhavan" rating="4.4" cuisine="South Inadian, North Indian, Sweets,...." location="Basavanagudi" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tuctdolyoffovvjnxuu4"/>
//         <RestaurantCard restName="Homely" rating="4.2" cuisine="Home Food, South Inadian, North Indian,...." location="Seshadripuram" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nuocdaza60ihu4jsivtc"/>
//         <RestaurantCard restName="Burger King" rating="4.2" cuisine="Burgers, American" location="Cholourpalya" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
//         <RestaurantCard restName="EatFit" rating="4.3" cuisine="Chinese, Healthy Food, Tandoor, Pizzas,....." location="Cunningham Road" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6126c9b45de2cb222405c1af8a321e74" />
//         <RestaurantCard restName="Lavonne" rating="4.6" cuisine="Bakery, Desserts" location="St. Marks Road" imgAddress="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emlehbuwgsmryxhwzhvq" />
//       </div>
//     </div>
//   )
// }






const MyApplication = () => {
  return (
    <div className="application">
      <Header></Header>
      <Todo />
      <Body/>
    </div>
  );
}




//* rendering component:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApplication />);