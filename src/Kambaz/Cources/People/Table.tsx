import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;

    console.log("Current course ID:", cid);
    console.log("All users:", users);
    console.log("All enrollments:", enrollments);
    
    const filteredUsers = users.filter((usr) =>
        enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
    );
    
    console.log("Filtered users:", filteredUsers);
    
    if (filteredUsers.length === 0) {
        return <div>No users found for this course.</div>;
    }

    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    {users.filter((usr) =>
                        enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
                    )
                        .map((user: any) => (
                            <tr key={user._id}>
                                <td className="wd-full-name text-nowrap">
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName}</span>
                                    <span className="wd-last-name">{user.lastName}</span>
                                </td>
                                <td className="wd-login-id">{user.loginId}</td>
                                <td className="wd-section">{user.section}</td>
                                <td className="wd-role">{user.role}</td>
                                <td className="wd-last-activity">{user.lastActivity}</td>
                                <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>
                        ))}

                </tbody>
            </Table>
        </div>);
}

