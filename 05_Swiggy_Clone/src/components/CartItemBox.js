import { MENU_IMG_URL } from "../utils/constants";
import { BiSolidStar } from "react-icons/bi";
import { PiSquareLogoFill } from "react-icons/pi";
import { BiCaretUpSquare } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeItem } from "../appStore/slices/cartSlice";

const CartItemBox = ({ menuData }) => {
  const dispatch = useDispatch();

  const {
    name,
    description,
    price,
    defaultPrice,
    imageId,
    itemAttribute,
    offerTags,
    ribbon,
  } = menuData?.card?.info;

  function handleRemoveItem() {
    dispatch(removeItem());
  }

  return (
    <div className="menuCardBox w-full min-h-[200px] py-5 flex justify-between items-center border-b-2 border-b-gray-300">
      <div className="menuTitleBox w-3/4">
        <h4 className="mb-1.5 flex items-center">
          {itemAttribute?.vegClassifier === "VEG" ? (
            <span className="text-green-500 text-xl font-medium">
              <PiSquareLogoFill />
            </span>
          ) : (
            <span className="text-rose-700 text-xl">
              <BiCaretUpSquare />
            </span>
          )}
          <span className="text-orange-300 text-sm ml-2">
            {ribbon.hasOwnProperty("text") ? "⭐" + ribbon?.text : ""}
          </span>
        </h4>
        <h4 className="font-medium">{name}</h4>
        <p className="menuPrice font-light">
          ₹ {price / 100 || defaultPrice / 100}{" "}
          {offerTags && offerTags[0]?.title && (
            <span className="text-xs px-1 bg-[#FAE8E3] ml-2 border-l-2 border-l-orange-700 text-orange-700">
              {" "}
              {offerTags[0]?.title + " | " + offerTags[0]?.subTitle}
            </span>
          )}
        </p>
        <p className="menuDescription my-2 text-slate-400 text-sm">
          {description}
        </p>
      </div>
      <div className="menuImgBox relative w-max">
        <img
          className="h-24 w-32 rounded-md"
          src={MENU_IMG_URL + imageId}
          alt={name.substring(0, 10) + "... pic"}
        />
        <button
          className="absolute right-0 -top-10 w-[35px] h-[35px] bg-slate-400 rounded-full hover:bg-red-500 text-white"
          title="Remove Item from cart."
          onClick={() => {
            handleRemoveItem();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItemBox;
