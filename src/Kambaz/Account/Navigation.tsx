import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
//import { useSelector } from "react-redux";

export default function AccountNavigation() {
  //const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="fs-5 rounded-0">
      <Link to={`/Kambaz/Account/Signin`}
        className="text-danger active border border-0" > Signin  </Link><br />
      <Link to={`/Kambaz/Account/Signup`}
        className="text-danger border border-0"> Signup  </Link><br />
      <Link to={`/Kambaz/Account/Profile`}
        className="text-danger border border-0"> Profile </Link><br />
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
    </div>
  );
}
