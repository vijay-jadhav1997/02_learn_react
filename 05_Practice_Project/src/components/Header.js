import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  //* useState declare Local State Variable- which is Super Powerful variable:
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus();
  
  return (
    <div className="headerBox">
      <div className="header">
        <div className="logoBox">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="navBox">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
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
          <img className="profileImg" src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"/>
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