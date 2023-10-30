import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  //* useState declare Local State Variable- which is Super Powerful variable:
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus();
  
  return (
    <div className="bg-pink-400">
      <div className="flex justify-between h-35">
        <div className="w-50">
          <img className="w-20 h-20" src={LOGO_URL}/>
        </div>
        <div className="">
          <ul className="flex justify-between">
            <li><Link className="linkTag" to="/">Home</Link></li>
            <li><Link className="linkTag" to="/about">About Us</Link></li>
            <li><Link className="linkTag" to="/contact">Contact Us</Link></li>
            <li><Link className="linkTag" to="/grocery">Grocery Store</Link></li>
          </ul>
        </div>
        <div>
          <button className="loginBtn"
            onClick={
              (event) => {
                btnName === "Login" ? setBtnName("Log out") : setBtnName("Login")
              }
            }
          >{btnName}</button>
        </div>
        <div className="profileBox">
          <img className="w-20" 
            src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"

          />
          <span>Radhe Shyam</span>
        </div>
      </div>
      <div className="onlineStatus">
        {!isOnline ? `🔄 Look like You're Offline...! Please, check your internet Connection.` : ""}
      </div>
    </div>
  )
}


export default Header;