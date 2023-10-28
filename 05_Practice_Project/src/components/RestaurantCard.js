import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
  const {restaurantData} = props;
  const {
    cloudinaryImageId, 
    name, avgRating, 
    cuisines, 
    areaName, 
    costForTwo, 
    aggregatedDiscountInfoV3, 
    sla
  } = restaurantData?.info;
  return (
    <div className="restaurantCard">
      <div className="bannerBox">
        <img src={CDN_URL + cloudinaryImageId} />
        <span>{
          (aggregatedDiscountInfoV3?.header !== undefined ? aggregatedDiscountInfoV3?.header : "")
          + " " + 
          (aggregatedDiscountInfoV3?.subHeader !== undefined ? aggregatedDiscountInfoV3?.subHeader : "")
          }</span>
      </div>

      <div className="cardDetails">
        <h3>{name}</h3>
        <h5>{avgRating} Star</h5>
        <h5>{cuisines.join(', ')}</h5>
        <h5>Location: {areaName}</h5>
        <h4>Price: {costForTwo}</h4>
        <h4 className="deliveryTime">deliver in  {sla.slaString}</h4>
      </div>
    </div>

  );
}


export default RestaurantCard;

