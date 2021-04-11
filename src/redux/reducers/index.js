import { combineReducers } from "redux";
import feedReducer from "./feeds-reducer";

export default combineReducers({
  feed: feedReducer,
});
