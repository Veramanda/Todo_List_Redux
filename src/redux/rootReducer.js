import { combineReducers } from "redux";
import { operationsReducer } from "./reducer/todo-reducer";


export const rootReducer = combineReducers({
    operationsReducer
})