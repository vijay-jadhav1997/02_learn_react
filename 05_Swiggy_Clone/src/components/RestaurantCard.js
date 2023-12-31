import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    aggregatedDiscountInfoV3,
    sla,
  } = restaurantData?.info;

  const cuisinesString = cuisines.join(", ");
  return (
    <div className="flex-col w-[275px] hover:bg-blue-900 border text-white p-2 rounded-xl">
      <div className="relative">
        <img
          className="w-[260px] h-[180px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
        <span className="absolute  bottom-2 left-1 bg-indigo-950 px-2">
          {(aggregatedDiscountInfoV3?.header !== undefined
            ? aggregatedDiscountInfoV3?.header
            : "") +
            " " +
            (aggregatedDiscountInfoV3?.subHeader !== undefined
              ? aggregatedDiscountInfoV3?.subHeader
              : "")}
        </span>
      </div>

      <div className="mt-3 pl-1">
        <h3 className="text-lg ">
          {name.length > 30 ? name.slice(0, 29) + "..." : name}
        </h3>
        <h5>
          {avgRating} Star .{" "}
          <span className="font-medium"> {sla.slaString}</span>
        </h5>
        <h5 className="text-sm mt-3 text-gray-400">
          {cuisinesString.length > 35
            ? cuisinesString.substring(0, 35) + "..."
            : cuisinesString}
        </h5>
        <h5 className=" text-sm mt-1 text-gray-400">Location: {areaName}</h5>
        <h4 className="text-gray-200 my-3">Price: {costForTwo}</h4>
      </div>
    </div>
  );
};

//* Higher Order Component:

//* input - RestaurantCard =>> RetsaurantCardPromoted

const withVegLabel = (RestaurantCard) => {
  return ({ restaurantData }) => {
    // console.log(restaurantData?.info?.veg);
    return (
      <div className="relative">
        <label className="absolute text-gray-200 top-3 left-3 py-2 px-3 rounded-md bg-blue-950/50">
          Pure Veg
        </label>
        <RestaurantCard restaurantData={restaurantData} />
      </div>
    );
  };
};

export { withVegLabel, RestaurantCard as default };
