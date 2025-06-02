import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment } from "./reducer";
import { Button, Form } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);

  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const isNew = !existingAssignment;

  const [title, setTitle] = useState(existingAssignment?.title ?? "New Assignment");
  const [description, setDescription] = useState(existingAssignment?.description ?? "");
  const [availableFrom, setAvailableFrom] = useState(
    existingAssignment?.availableFrom ?? new Date().toISOString().slice(0, 10)
  );
  const [dueDate, setDueDate] = useState(
    existingAssignment?.dueDate ?? new Date().toISOString().slice(0, 10)
  );
  const [points, setPoints] = useState(existingAssignment?.points ?? 100);

  const handleSave = () => {
    const assignment = {
      _id: aid,
      title,
      course: cid ?? "",
      description,
      availableFrom,
      dueDate,
      points,
    };

    dispatch(addAssignment(assignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="p-4">
      <h3>{isNew ? "Create New Assignment" : "Edit Assignment"}</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="date"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
