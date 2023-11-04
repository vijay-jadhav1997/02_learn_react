import {MENU_IMG_URL} from "../utils/constants"


const MenuCardBox = ({menuData})=> {
  const {name, description, price, defaultPrice, imageId} = menuData?.card?.info
  // console.log(menuData?.card?.info);
  return(
    <div className="menuCardBox py-5 flex justify-between items-center">
      <div className="menuTitleBox w-3/4">
        <h4 className="font-medium">{name}</h4>
        <p className="menuPrice font-light">₹{price/100 || defaultPrice/100}</p>
        <p className="menuDescription my-2 text-slate-400 text-sm">{description}</p>
      </div>
      <div className="menuImgBox w-max">
        <img className="h-24 rounded-md" src={MENU_IMG_URL + imageId} alt={name.substring(0, 10) + "... pic"} />
        <p className="text-center text-xs text-slate-400">Customisable</p>
      </div>
    </div>
  )
}

export default MenuCardBox;