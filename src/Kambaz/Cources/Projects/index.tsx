export default function Projects() {
    return (
        <div id="wd-projects">
            <input placeholder="Search for Projects" id="wd-search-project" />
            <button id="wd-edit-project-group">Edit Project Groups</button>
            <button id="wd-edit-project">Edit Project</button>

            <h3 id="wd-project-title">
                Projects 10% of Total<button>+</button>
                <label htmlFor="wd-project-group">Group</label>
                <select id="wd-select-project-group">
                    <option value="Group1">Group1</option>
                    <option value="Group2">Group2</option>
                    <option value="Group3">Group3</option>
                    <option value="Group4">Group4</option>
                    <option value="Group5">Group5</option>
                </select>
            </h3>

            <ul id="wd-project-list">
                <li className="wd-project-list-item">
                    <a href="#/Kambaz/Courses/1234/Projects/123" className="wd-project-link">
                        Project1
                    </a>
                </li>
                <li className="wd-projects-list-item">
                    <a href="#/Kambaz/Courses/1234/Projects/245" className="wd-project-link">
                        Project2
                    </a>
                </li>
            </ul>


        </div>
    );
}