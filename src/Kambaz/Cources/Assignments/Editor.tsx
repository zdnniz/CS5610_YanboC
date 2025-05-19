import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            placeholder="Assignment Name"
            value="A1 - ENV + HTML"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            defaultValue="The assignment is available online Submit a link to the landing page of"
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center">
          <Form.Label column sm={2} htmlFor="wd-points" className="text-end">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              id="wd-points"
              placeholder="points"
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
              <option value="Group1">Group1</option>
              <option value="Group2">Group2</option>
              <option value="Group3">Group3</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center">
          <Form.Label column sm={2} htmlFor="wd-display-grade-as" className="text-end">
            Display Grade as
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-display-grade-as" className="w-50">
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="F">F</option>
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
                    <option value="HTML">HTML</option>
                    <option value=".pdf">.pdf</option>
                    <option value=".doc">.doc</option>
                    <option value=".txt">.txt</option>
                    <option value=".zip">.zip</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-baseline">
                <h4>
                  Online Entry Options
                </h4>
                <Col sm={10}>
                  <Form.Check
                    type="checkbox"
                    id="wd-text-entry"
                    label="Text Entry"
                    className="mb-1"
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
                  placeholder="Assign to"
                  value="Everyone"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
                <Form.Control
                  id="wd-due-date"
                  type="date"
                  defaultValue="2025-05-07"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={6}>
                  <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                  <Form.Control
                    id="wd-available-from"
                    type="date"
                    defaultValue="2025-05-01"
                  />
                </Col>
                <Col sm={6}>
                  <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                  <Form.Control
                    id="wd-available-until"
                    type="date"
                    defaultValue="2025-05-15"
                  />
                </Col>
              </Form.Group>
            </div>
          </Col>
        </Row>

        <div className="mt-4">
          <Button variant="secondary" className="me-2" id="wd-editor-cancel">
            Cancel
          </Button>
          <Button variant="danger" id="wd-editor-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}