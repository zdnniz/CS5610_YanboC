import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="fs-5 rounded-0">
      <h3>Sign in</h3>
      <Form.Control placeholder="username" className="mb-2" /> 
      <Form.Control placeholder="password" type="password" className="mb-2" /> 
      <Link id="wd-signin-btn" to="/Kambaz/Dashboard" className="btn btn-primary w-100 mb-2"> Sign in </Link> 
      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link>

      <br /><ul>
        <li>Name: Yanbo Cheng</li>
        <li>Section: 2025 Summer 1</li>
        <li>Github: <a href="https://github.com/zdnniz/CS5610_YanboC">Link</a></li>
      </ul>
    </div>
);}
