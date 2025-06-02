import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Cources";
import ProtectedRoute from "./Account/ProtectedRoute.tsx"
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {addNewCourse, deleteCourse, updateCourse} from "./Cources/reducer"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store.ts";

export default function Kambaz() {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courseReducer.courses);

  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const handleAddCourse = () => dispatch(addNewCourse(course));
  const handleDeleteCourse = (id: string) => dispatch(deleteCourse(id));
  const handleUpdateCourse = () => dispatch(updateCourse(course));

  return (
    <div id="wd-kambaz">

      <KambazNavigation />

      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={handleAddCourse}
            deleteCourse={handleDeleteCourse}
            updateCourse={handleUpdateCourse} /></ProtectedRoute>}
          />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}


