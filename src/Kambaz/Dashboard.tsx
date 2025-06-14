import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import * as db from "./Database";
import { useSelector } from "react-redux";
import * as enrollmentClient from "./enrollmentsClient";

export default function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const isEnrolled = (courseId: string) =>
    enrollments.some(e => e.user === currentUser._id && e.course === courseId);

  /*const enroll = (courseId: string) => {
    enrollments.push({
      user: currentUser._id, course: courseId,
      _id: ""
    });
  };

  const unenroll = (courseId: string) => {
    const index = enrollments.findIndex(e =>
      e.user === currentUser._id && e.course === courseId);
    if (index !== -1) {
      enrollments.splice(index, 1);
    }
  };*/

  const enroll = async (courseId: string) => {
    await enrollmentClient.enroll(currentUser._id, courseId);
    enrollments.push({ user: currentUser._id, course: courseId, _id: "" });
  };

  const unenroll = async (courseId: string) => {
    await enrollmentClient.unenroll(currentUser._id, courseId);
    const index = enrollments.findIndex(e => e.user === currentUser._id && e.course === courseId);
    if (index !== -1) {
      enrollments.splice(index, 1);
    }
  };

  const filteredCourses = showAll ? courses : courses.filter(course =>
    isEnrolled(course._id)
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />
      <h5>New Course
        <button className="btn btn-info float-end me-2"
          onClick={() => setShowAll(!showAll)}>
          {showAll ? "My Courses" : "Enroll"}
        </button>
        <button className="btn btn-primary float-end me-2"
          onClick={addNewCourse}> Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse}> Update </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl as="textarea" value={course.description} rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />

      <h2 id="wd-dashboard-published">
        {showAll ? "All Courses" : "Enrolles Courses"} ({filteredCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => {
            const enrolled = isEnrolled(course._id);
            return (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <div className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {enrolling && (
                          <button onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }} className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}</Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description}</Card.Text>

                      <Button className="btn btn-primary" onClick={() => {
                        if (enrolled) {
                          navigate(`/Kambaz/Courses/${course._id}/Home`);
                        } else {
                          alert("Enroll the Course First");
                        }
                      }}>
                        Go
                      </Button>

                      <button className="btn btn-warning float-end me-2"
                        onClick={() => setCourse(course)}>
                        Edit
                      </button>

                      <button className="btn btn-danger float-end me-2"
                        onClick={() => deleteCourse(course._id)}>
                        Delete
                      </button>

                      {enrolled ? (
                        <button className="btn btn-outline-danger mt-2 w-100"
                          onClick={() => { unenroll(course._id); }}>
                          Unenroll
                        </button>
                      ) : (
                        <button className="btn btn-outline-success mt-2 w-100"
                          onClick={() => { enroll(course._id); }}>
                          Enroll
                        </button>
                      )}
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
