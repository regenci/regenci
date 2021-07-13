import { combineReducers } from "redux";
import sidebar from "@store/reducers/sidebar/sidebar-reducer";

const rootReducer = combineReducers({
  sidebar,
});
export default rootReducer;
