import { FaPlus, FaSearch } from "react-icons/fa";
import { Button, ListGroup, Form } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link, useNavigate } from "react-router-dom"; 
import AssignmentControlButtons from './AssignmentControlButtons';
import AssignmentModule from './AssignmentModule';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client"
import { useEffect } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate(); 
    const dispatch = useDispatch();


    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment: any) => assignment.course === cid
    );

    /*const addAssignmentHandler = () => {
      const newAssignment = {
        _id: uuidv4(),
        title: "New Assignment",
        course: cid ?? "",
        description: "",
        availableFrom: new Date().toISOString().slice(0, 10),
        dueDate: new Date().toISOString().slice(0, 10),
        points: 100,
      };
    
      dispatch(addAssignment(newAssignment));
      navigate(`/Kambaz/Courses/${cid}/Assignments/${newAssignment._id}`);}

      const handleDelete = (assignmentId: string) => {
        dispatch(deleteAssignment(assignmentId));
      };*/

      const addAssignmentHandler = async () => {
        const newAssignment = {
          _id: uuidv4(),
          title: "New Assignment",
          course: cid ?? "",
          description: "",
          availableFrom: new Date().toISOString().slice(0, 10),
          dueDate: new Date().toISOString().slice(0, 10),
          points: 100,
        };
        const saved = await client.createAssignment(newAssignment);
        dispatch(addAssignment(saved));
        navigate(`/Kambaz/Courses/${cid}/Assignments/${saved._id}`);
      };
      
      const handleDelete = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      };
      
      useEffect(() => {
        const fetchAssignments = async () => {
          const data = await client.findAssignmentsForCourse(cid ?? "");
          dispatch(setAssignments(data));
        };
        fetchAssignments();
      }, [cid]);

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
                    <Button
                        variant="danger"
                        size="sm"
                        id="wd-add-assignment-btn"
                        onClick={addAssignmentHandler}
                    >
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
                        {courseAssignments.map((assignment: any) => ( 
                            <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1 border-start border-success border-3">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <div>
                                        <Link
                                            to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                            className="wd-assignment-link text-dark fw-bold"
                                        >
                                            {assignment.title}
                                        </Link>
                                        <div className="text-muted small">
                                            Multiple Modules | <b>Not available until</b> {assignment.availableFrom} |{" "}
                                            <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                                        </div>
                                    </div>
                                    <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={handleDelete}/>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}