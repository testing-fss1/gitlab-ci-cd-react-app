import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ChangeMobileNumberReducer from "./ChangeMobileNumberReducer";
import UniqueCodeReducer from "./UniqueCodeReducer";

const NotificationTypes = combineReducers({
  routing: routerReducer,
  ChangeMobileNumberReducer : ChangeMobileNumberReducer,
  UniqueCodeReducer : UniqueCodeReducer 


});

export default NotificationTypes;
