import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { courses } from "../Database";

const initialState = {
    courses: courses,
};
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            const newCourse: any = {
                _id: uuidv4(),
                name: course.name,
                number: "0",
                startDate: "2025-06-01",
                endDate: "2025-06-01",
                department: "A101",
                credits: 4,
                description: "",
            };
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (c: any) => c._id !== courseId);
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c
            ) as any;
        },
        editCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === courseId ? { ...c, editing: true } : c
            ) as any;
        },
    },
});

export const { addNewCourse, deleteCourse, updateCourse, editCourse } =
    coursesSlice.actions;
export default coursesSlice.reducer;

