import { Link } from "react-router-dom";

export default function AccountNavigation() {
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
