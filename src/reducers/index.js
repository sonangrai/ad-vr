import { combineReducers } from "redux";
import auth from "./auth";
import ads from "./ads";
import alert from "./alert";

export default combineReducers({
  auth,
  ads,
  alert,
});
