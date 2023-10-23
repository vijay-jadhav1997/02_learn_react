import React from "react";
import { useState } from "react";

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
        <img className="logo" src="https://cdn.dribbble.com/users/2567056/screenshots/6262603/food_logo.jpg"/>
      </div>
      <div className="navBox">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        <button className="loginBtn" 
          onClick={
            (evenet) => {
              btnName === "Login" ? setBtnName("Log out") : setBtnName("Login");
            }
          }
        >{btnName}</button>
        <span></span>
      </div>
      <div className="profileBox">
        <img className="profileImg" src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"/>
        <span>Radhe Shyam</span>
      </div>
    </div>
  )
}


export default Header;