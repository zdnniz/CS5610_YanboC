export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
        id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
        <label htmlFor="wd-assignment-group">Group</label>
        <select id="wd-select-assignment-group">
          <option value="Group1">Group1</option>
          <option value="Group2">Group2</option>
          <option value="Group3">Group3</option>
        </select>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>

          <p>Multiple Modules | <b>Not available until</b> May 6 at 12: 00am |</p>
          <p><b>Due</b> May 13 at 11： 59pm | 100 pts A2-CSS BOOTSTRAP</p>
        </li>

        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/234"
            className="wd-assignment-link" >
            A2 - CSS BOOTSTRAP
          </a>

          <p>Multiple Modules | <b>Not available until</b> May 13 at 12: 00am |</p>
          <p> <b>Due</b> May 20 at 11: 59pm | 100 pts</p>
        </li>

        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/244"
            className="wd-assignment-link" >
            A3 - JAVASCRIPT REACT
          </a>

          <p>Multiple Modules | <b>Not available until</b> May 20 at 12：00am |</p>
          <p> <b>Due</b> May 27 at 11: 59pm | 100 pts</p>
        </li>

      </ul>
    </div>
  );
}

