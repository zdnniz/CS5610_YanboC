import { createSlice } from '@reduxjs/toolkit';
import * as db from '../../Database';

export interface assignmentReducer {
  _id: string;
  title: string;
  course: string;
  description: string;
  availableFrom: string;
  dueDate: string;
  points: number;
}

interface AssignmentsState {
  assignments: assignmentReducer[];
}

const initialState: AssignmentsState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments.push(assignment);
    },
    
    deleteAssignment: (state, {payload: assignmentId}) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
