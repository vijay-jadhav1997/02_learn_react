import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return !user ? (
    <h2 className="text-center text-2xl font-semibold my-5">Not logged in</h2>
  ) : (
    <h2 className="profile text-center text-2xl font-semibold my-5">
      Logged as {user?.userName}
    </h2>
  );
}

export default Profile;
