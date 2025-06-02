import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} placeholder="username" id="wd-username" className="mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <FormControl defaultValue={profile.password} placeholder="password" type="password" id="wd-password" className="mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <FormControl defaultValue={profile.firstName} placeholder="First Name" id="wd-firstname" className="mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <FormControl defaultValue={profile.lastName} placeholder="Last Name" id="wd-lastname" className="mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <FormControl defaultValue={profile.dob} type="date" id="wd-dob" className="mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          <FormControl defaultValue={profile.email} type="email" id="wd-email" className="mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            defaultValue="FACULTY" className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>       <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
