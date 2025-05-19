import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control defaultValue="alice" placeholder="username" className="wd-username mb-2"/>
      <Form.Control defaultValue="123"   placeholder="password" type="password"
             className="wd-password mb-2" /> 
      <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2"/> 
      <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2"/> 
      <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob" className="mb-2"/> 
      <Form.Control defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2"/> 
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select> 
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">Sign out</Link>
    </div>
);}
