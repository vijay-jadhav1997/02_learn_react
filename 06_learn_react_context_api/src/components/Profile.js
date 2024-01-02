import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  return <div className="profile">Profile UserName: {user?.userName}</div>;
}

export default Profile;
