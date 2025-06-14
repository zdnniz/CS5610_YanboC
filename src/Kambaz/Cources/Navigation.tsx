import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router";

export default function CourseNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd-list-group fs-5 rounded-0">
            {links.map((link) => {
                const path = `/Kambaz/Courses/${cid}/${link}`;
                const isActive = pathname.includes(path);

                return (
                    <Link to={path} key={link} id={`wd-course-${link.toLowerCase()}-link`}
                        className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
                        {link}
                    </Link>
                );
            }
            )}

        </div>
    );
}

