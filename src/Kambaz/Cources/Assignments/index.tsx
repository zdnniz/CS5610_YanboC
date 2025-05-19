import { FaPlus, FaSearch } from "react-icons/fa";
import { Button, ListGroup, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from './AssignmentControlButtons';
import AssignmentModule from './AssignmentModule';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative w-50">
          <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <Form.Control
            type="text"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="ps-5"
          />
        </div>
        <div>
          <Button variant="secondary" size="sm" className="me-1" id="wd-group">
            <FaPlus className="me-2" />
            Group
          </Button>
          <Button variant="danger" size="sm" id="wd-add-assignment-btn">
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      </div>

      <ListGroup id="wd-assignments-title" className="rounded-0">
        <ListGroup.Item className="p-0 mb-3 fs-5 border border-1 border-gray">

          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
            <BsGripVertical className="me-2 fs-3" /><span className="fw-bold">ASSIGNMENTS</span>
            <span className="badge rounded-pill bg-secondary px-3 py-1">
              40% of Total
            </span>
            <AssignmentModule />
          </div>
          <ListGroup id="wd-lessons" className="rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-start border-success border-3">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-dark fw-bold"
                  >
                    A1 - ENV + HTML
                  </a>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div><AssignmentControlButtons />
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1 border-start border-success border-3">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/234"
                    className="wd-assignment-link text-dark fw-bold"
                  >
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am |{" "}
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                </div><AssignmentControlButtons />
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1 border-start border-success border-3">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <div>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/244"
                    className="wd-assignment-link text-dark fw-bold"
                  >
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am |{" "}
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                </div><AssignmentControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}