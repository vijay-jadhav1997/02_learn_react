




const RestaurantCard = (props) => {
  const {restaurantData} = props;
  console.log(restaurantData);
  const {
    image, 
    name, 
    ratingNew, 
    cuisine, 
    cfo
  } = restaurantData?.info;

  const {bulkOffers, order, bottomContainers} = restaurantData;
  
  return (
    <div className="restaurantCard">
      <div className="bannerBox">
        <img src={image?.url} />
        <p>{bulkOffers?.text}</p>
      </div>

      <div className="cardDetails">
        <div className="title_box">
          <h4 className="restName">{name}</h4>
          <p className="rating" style={backgroundColor=ratingNew?.ratings?.DELIVERY?.bgColorV2}>{ratingNew?.ratings?.DELIVERY?.rating}</p>
        </div>
        <div className="cardDatails_box2">
          <p className="cuisines">{cuisine.map((obj) => obj.name + ", ")}</p>
          <p className="price">{cfo}</p>
        </div>
        <div className="cardDatails_box3">
          <div ></div>
          <p className="delivery_time">{order?.deliveryTime}</p>
        </div>
        <div className="safetyInfo_box">
          <img className="safatyInfo_img" src={bottomContainers?.image?.url}/>
          <p className="safatyInfo_text">{bottomContainers?.text}</p>
        </div>
      </div>
    </div>

  );
}


export default RestaurantCard;

