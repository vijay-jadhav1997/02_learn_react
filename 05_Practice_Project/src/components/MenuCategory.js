import { useState } from "react";
import MenuCardBox from "./MenuCardBox"
import { MdKeyboardArrowDown } from "react-icons/md";


const MenuCategory = ({data}) => {
  // console.log(data);
  const [accordion, setAccordion] = useState(true);
  
  function handleAccordion(params) {
    setAccordion(!accordion);
  }
  return (
    <div className="px-2 py-3">
      <div className="categoryTitleBox cursor-pointer flex justify-between my-3 text-lg font-semibold"
        onClick={handleAccordion}
      >
        <span>{data.title} ({data.itemCards.length})</span>
        {<span className={accordion ? "rotate-180" : ""}><MdKeyboardArrowDown /></span>}
      </div>

      {accordion && <div className="divide-y divide-slate-400">
        {
          data.itemCards.map((menu) => {
            return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
          })
        }
      </div>}
    </div>
  );
}

export default MenuCategory;