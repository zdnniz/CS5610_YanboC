import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import Users from "./Users";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen" className="fs-5 rounded-0">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <div className="active border border-0">
              <Routes>
                <Route path="/" element={<Navigate to={currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Users/:uid" element={<Users />} />
              </Routes>
            </div>
          </td>
        </tr>
      </table>
    </div>

  );
}
