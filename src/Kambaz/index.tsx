import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Cources";
import ProtectedRoute from "./Account/ProtectedRoute.tsx"
import "./styles.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//import {addNewCourse, deleteCourse, updateCourse} from "./Cources/reducer"
import { useSelector } from "react-redux";
import Session from "./Account/Session.tsx";
import * as courseClient from "./Cources/client.ts"
import * as userClient from "./Account/client";

export default function Kambaz() {
  //const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Failed to add course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    //const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
};

const updateCourse = async () => {
  await courseClient.updateCourse(course);
  setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
  })
);};

  return (
    <Session>
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
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} /></ProtectedRoute>}
          />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
  );
}


