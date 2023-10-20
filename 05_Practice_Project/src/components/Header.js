import { LOGO_URL } from "../utils/constants";


const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="navBox">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="profileBox">
        <img className="profileImg" src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"/>
        <span>Radhe Shyam</span>
      </div>
    </div>
  )
}


export default Header;