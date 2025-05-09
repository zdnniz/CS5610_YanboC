export default function Exams() {
    return (
        <div id="wd-exams">
            <input placeholder="Search for Exams" id="wd-search-exam" />
            <button id="wd-edit-exams-group">Edit Quiz Groups</button>
            <button id="wd-edit-exams">Edit Quiz</button>

            <h3 id="wd-exam-list">
                Exams 30% of Total <button>+</button>
                <label htmlFor="wd-exam-group">Group</label>
                <select id="wd-select-exam-group">
                    <option value="Group1">Group1</option>
                    <option value="Group2">Group2</option>
                    <option value="Group3">Group3</option>
                    <option value="Group4">Group4</option>
                </select>
            </h3>

            <ul id="wd-exam-list">
                <li className="wd-exam-list-item">
                    <a href="#/Kambaz/Courses/1234/Exams/123" className="wd-exam-link">
                        Exam1
                    </a>
                </li>
                <li className="wd-exam-list-item">
                    <a href="#/Kambaz/Courses/1234/Exams/256" className="wd-exam-link">
                        Exam2
                    </a>
                </li>

            </ul>
        </div>
    );
}