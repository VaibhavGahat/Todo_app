import todoReducer from "./Todo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;