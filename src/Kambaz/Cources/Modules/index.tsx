import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from './ModulesControls'
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import { ListGroup } from 'react-bootstrap';

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 1, Lecture 1<ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroup.Item>
                    </ListGroup>

                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introductor<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating Us<LessonControlButtons /></ListGroup.Item>

                    </ListGroup>

                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Creating an HTTP Server with Node.js<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons /></ListGroup.Item>

                    </ListGroup>
                </ListGroup.Item>

                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 2<ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify<LessonControlButtons /></ListGroup.Item>



                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Introduction to HTML and the DOM<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Formatting Web content with Headings and Paragraphs<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Formatting content with Lists and Tables<LessonControlButtons /></ListGroup.Item>


                    </ListGroup>
                </ListGroup.Item>

                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />Week 2<ModuleControlButtons /></div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />The structure  of Web Development<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />The libararies used for developing<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className='wd-lesson p-3 ps-1'>
                            <BsGripVertical className="me-2 fs-3" />References<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />Bootstrap<LessonControlButtons /></ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />MERN<LessonControlButtons /></ListGroup.Item>

                    </ListGroup>
                </ListGroup.Item>

                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-lesson p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />Week 3<ModuleControlButtons /></div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="ms-0 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="ms-0 fs-3" />Introduction of JS & html<LessonControlButtons /></ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>

        </div>
    );
}

