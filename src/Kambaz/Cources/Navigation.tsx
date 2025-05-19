import { Link } from "react-router-dom";
export default function CourseNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd-list-group fs-5 rounded-0">
            <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
                className="list-group-item active border border-0">Home</Link>

            <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
                className="list-group-item text-danger border border-0"> Modules </Link>

            <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
                className="list-group-item text-danger border border-0">Piazza</Link>

            <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
                className="list-group-item text-danger border border-0">Zoom</Link>

            <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-assignments-link"
                className="list-group-item text-danger border border-0">Assignments</Link>

            <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-quizzes-link"
                className="list-group-item text-danger border border-0">Quizzes</Link>

            <Link to="/Kambaz/Courses/1234/Exams" id="wd-course-exams-link"
                className="list-group-item text-danger border border-0">Exams</Link>

            <Link to="/Kambaz/Courses/1234/Projects" id="wd-course-projects-link"
                className="list-group-item text-danger border border-0">Projects</Link>

            <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
                className="list-group-item text-danger border border-0">Grades</Link>

            <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
                className="list-group-item text-danger border border-0">People</Link>
        </div>
    );
}

