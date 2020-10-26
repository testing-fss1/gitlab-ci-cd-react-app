import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ComposeHistory from "./ComposeHistoryReducer";

const ComposeHistoryReducer = combineReducers({
  routing: routerReducer,
  ComposeHistory:ComposeHistory,
});

export default ComposeHistoryReducer;
