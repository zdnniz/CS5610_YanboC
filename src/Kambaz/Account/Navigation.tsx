import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";

export default function AccountNavigation() {
  //const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="fs-5 rounded-0">
      <Link to={`/Kambaz/Account/Signin`}
        className="text-danger active border border-0" > Signin  </Link><br />
      <Link to={`/Kambaz/Account/Signup`}
        className="text-danger border border-0"> Signup  </Link><br />
      <Link to={`/Kambaz/Account/Profile`}
        className="text-danger border border-0"> Profile </Link><br />

    </div>
  );
}
