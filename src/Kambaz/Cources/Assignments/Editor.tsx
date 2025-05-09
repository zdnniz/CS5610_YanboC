export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" placeholder="Assignment Name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" placeholder="points" type="number" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Groups</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="Group1">Group1</option>
              <option value="Group2">Group2</option>
              <option value="Group3">Group3</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="F">F</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="HTML">HTML</option>
              <option value=".pdf">.pdf</option>
              <option value=".doc">.doc</option>
              <option value=".txt">.txt</option>
              <option value=".zip">.zip</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-text-entry">Online Entry Options</label>
          </td>
          <td>
            <label>
              <input type="checkbox" value="wd-text-entry" /> Text Entry
            </label><br />
            <label>
              <input type="checkbox" value="wd-website-url" /> Website URL
            </label><br />
            <label>
              <input type="checkbox" value="wd-media-recordings" /> Media Recordings
            </label><br />
            <label>
              <input type="checkbox" value="wd-student-annotation" /> Student Annotation
            </label><br />
            <label>
              <input type="checkbox" value="wd-file-upload" /> File Uploads
            </label>
          </td>
        </tr>

        <h4>Assign</h4>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" placeholder="Assign to" value="Everyone" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" value="2025-05-07" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" value="2025-05-01" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" value="2025-05-15" />
          </td>
        </tr>

      </table>

      <button id="wd-editor-cancel">Cancel</button>
      <button id="wd-deitor-save">Save</button>
    </div>
  );
}
