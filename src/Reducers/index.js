import { combineReducers } from "redux";
import techReducer from "./TechReducer";
import logReducer from "./LogReducer";
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
