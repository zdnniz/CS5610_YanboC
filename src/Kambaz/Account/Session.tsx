import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      console.log("signin success:", currentUser);
      dispatch(setCurrentUser(currentUser));
    } catch (e) {
      console.log("User not logged in, skipping profile check.");
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  
  if (!pending) {
    return children;
  }
}
