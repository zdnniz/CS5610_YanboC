import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Quizzes from "./Quizzes";
import Exams from "./Exams";
import Projects from "./Projects";
import Grades from "./Grades";
import { Navigate, Route, Routes } from "react-router";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CourseNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<Piazza/>} />
              <Route path="Zoom" element={<Zoom/>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
              <Route path="Quizzes" element={<Quizzes/>} />
              <Route path="Exams" element={<Exams/>} />
              <Route path="Projects" element={<Projects/>} />
              <Route path="Grades" element={<Grades/>} />
              <Route path="People" element={<h2>People</h2>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}

