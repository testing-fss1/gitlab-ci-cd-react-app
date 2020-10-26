import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import SubscriberListReducer from "./Notification";

const NotificationTypes = combineReducers({
  routing: routerReducer,
  SubscriberListReducer : SubscriberListReducer,
});

export default NotificationTypes;
