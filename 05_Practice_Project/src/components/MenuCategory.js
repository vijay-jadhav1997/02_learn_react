import MenuCardBox from "./MenuCardBox"


const MenuCategory = ({data}) => {
  return (
    <div className="shadow-lg rounded-md shadow-white my-3">
      <div className="categoryTitleBox flex justify-between">
        <span>{data.title} ({data.itemCards.length})</span>
        <span>⋁</span>
      </div>

      <div className="divide-y divide-slate-400">
        {
          data.itemCards.map((menu) => {
            return(<MenuCardBox key={menu?.card?.info?.id} menuData={menu}/>)
          })
        }
      </div>
    </div>
  );
}

export default MenuCategory;