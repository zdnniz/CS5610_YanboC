export default function Quizzes() {
    return (
        <div id="wd-quizzes">
            <input placeholder="Search for Quizzes" id="wd-search-quiz" />
            <button id="wd-edit-quiz-group">Edit Quiz Groups</button>
            <button id="wd-edit-quiz">Edit Quiz</button>

            <h3 id="wd-quiz-title">
                Quizzes 30% of Total <button>+</button>
                <label htmlFor="wd-quiz-group">Group</label>
                <select id="wd-select-quiz-group">
                    <option value="Group1">Group1</option>
                    <option value="Group2">Group2</option>
                </select>
            </h3>

            <ul id="wd-quiz-list">
                <li className="wd-quiz-list-item">
                    <a href="#/Kambaz/Courses/1234/Quiz/123" className="wd-quiz-link">
                        Quiz1
                    </a>
                </li>
                <li className="wd-quiz-list-item">
                    <a href="#/Kambaz/Courses/1234/Quiz/245" className="wd-quiz-link">
                        Quiz2
                    </a>
                </li>
            </ul>


        </div>
    );
}