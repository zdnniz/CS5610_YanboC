import { Form, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { updateAssignment } from './reducer';
import { useState } from 'react';

export default function AssignmentEditor() {
  const { aid, cid } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignment = useSelector((state: RootState) => state.assignmentReducer.assignments.find(a => a._id === aid));

  const [title, setTitle] = useState(assignment?.title || '');
  const [description, setDescription] = useState(assignment?.description || '');
  const [points, setPoints] = useState(assignment?.points || 0);
  const [dueDate, setDueDate] = useState(assignment?.dueDate || '');
  const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom || '');
  const [availableUntil, setAvailableUntil] = useState(assignment?.availableFrom || '');

  const handleSave = () => {
    if (!assignment) return;

    const updated = {
      ...assignment,
      title,
      description,
      points,
      dueDate,
      availableFrom,
    };
    dispatch(updateAssignment(updated));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const safeFormatDate = (dateString?: string): string => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? ""
      : new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            placeholder="Assignment Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center">
          <Form.Label column sm={2} htmlFor="wd-points" className="text-end">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              id="wd-points"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              type="number"
              className="w-25"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center">
          <Form.Label column sm={2} htmlFor="wd-group" className="text-end">
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-group" className="w-50">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center">
          <Form.Label column sm={2} htmlFor="wd-display-grade-as" className="text-end">
            Display Grade as
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-display-grade-as" className="w-50">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Row className='mt-4 mb-3 align-items-start'>
          <Col sm={12}>
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col sm={10}>
            <div className="border p-3 rounded-0" style={{ marginLeft: '120px' }}>
              <Form.Group as={Row} className="mb-3 align-items-center">
                <Col sm={10}>
                  <Form.Select id="wd-submission-type" className="w-50">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-baseline">
                <h4>Online Entry Options</h4>
                <Col sm={10}>
                  <Form.Check
                    type="checkbox"
                    id="wd-text-entry"
                    label="Text Entry"
                    className="mb-1"
                    defaultChecked
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-website-url"
                    label="Website URL"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-media-recordings"
                    label="Media Recordings"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-student-annotation"
                    label="Student Annotation"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-file-upload"
                    label="File Uploads"
                    className="mb-1"
                    defaultChecked
                  />
                </Col>
              </Form.Group>
            </div>
          </Col>
        </Row>

        <Row className="mt-4 mb-3">
          <Col sm={2}>
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col sm={10}>
            <div className="border p-3 rounded-0" style={{ marginLeft: '30px' }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
                <Form.Control
                  id="wd-assign-to"
                  defaultValue="Everyone"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
                <Form.Control
                  id="wd-due-date"
                  type="datetime-local"
                  value={safeFormatDate(dueDate)}
                  onChange={(e) => setDueDate(new Date(e.target.value).toISOString())}
                />
              </Form.Group>


              <Form.Group as={Row} className="mb-3">
                <Col sm={6}>
                  <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                  <Form.Control
                    id="wd-available-from"
                    type="datetime-local"
                    value={safeFormatDate(availableFrom)}
                    onChange={(e) => setAvailableFrom(new Date(e.target.value).toISOString())}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control
                    id="wd-available-until"
                    type="datetime-local"
                    value={safeFormatDate(availableUntil)}
                    onChange={(e) => setAvailableUntil(new Date(e.target.value).toISOString())}
                  />
                </Col>
              </Form.Group>
            </div>
          </Col>
        </Row>

        <div className="mt-4">
          <Button onClick={handleCancel} className="btn btn-secondary me-2" id="wd-editor-cancel">
            Cancel
          </Button>
          <Button onClick={handleSave} className="btn btn-danger" id="wd-editor-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}