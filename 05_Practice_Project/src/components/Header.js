import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  //* useState declare Local State Variable- Super Powerful variable:
  const [btnName, setBtnName] = useState("Login");
  
  //* if no depedency array => useEffect is called on every render of component which useEffect belongs to.
  //* if depedency array is empty "[]" => useEffect is called only once when component  render first time.
  //* if depedency array is [btnName] => useEffect is called everytime when btnName is updated.
  useEffect(() => {
  console.log("useEffect is called");
  },[btnName]);

  console.log("Header is rendered!");

  return (
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
  )
}


export default Header;