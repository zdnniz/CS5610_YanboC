import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">0012347898</td>
      <td className="wd-section">3101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-11</td>
      <td className="wd-total-activity">12:21:02</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Harry</span>{" "}
          <span className="wd-last-name">Kane</span></td>
      <td className="wd-login-id">003234561S</td>
      <td className="wd-section">4525</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-12-21</td>
      <td className="wd-total-activity">17:11:32</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">James</span>{" "}
          <span className="wd-last-name">Taylor</span></td>
      <td className="wd-login-id">001298261S</td>
      <td className="wd-section">8214</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-08-04</td>
      <td className="wd-total-activity">13:51:32</td></tr>

    </tbody>
   </Table>
  </div> );}

