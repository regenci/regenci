import { combineReducers } from "redux";
import sidebar from "@store/reducers/sidebar/SidebarReducer";

const rootReducer = combineReducers({
  sidebar,
});
export default rootReducer;
