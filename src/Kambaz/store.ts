import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Cources/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Cources/Assignments/reducer";
import courseReducer from "./Cources/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        courseReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
