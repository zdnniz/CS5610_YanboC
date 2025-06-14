import { Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async() => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  }

  return (
    <div id="wd-signin-screen" className="fs-5 rounded-0">
      <h3>Sign in</h3>
      <FormControl defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="mb-2" placeholder="username" id="wd-username" />
      <FormControl defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="mb-2" placeholder="password" type="password" id="wd-password" />

      <Button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> Sign in </Button>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>

      <br /><ul>
        <li>Name: Yanbo Cheng</li>
        <li>Section: 2025 Summer 1</li>
        <li>Github: <a href="https://github.com/zdnniz/CS5610_YanboC">Link</a></li>
      </ul>
    </div>
  );
}
