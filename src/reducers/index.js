import { combineReducers } from "redux";
import { user } from "./user";
import { solar } from "./solar";

export default combineReducers({
  solar,
  user
});
