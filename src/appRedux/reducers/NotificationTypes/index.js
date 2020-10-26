import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import NotifiTypesListService from "./NotifiTypesListService";
import AddNotifiTypesService from "./AddNotifiTypesService";
import EditNotificationType from "./EditNotificationType";

const NotificationTypes = combineReducers({
  routing: routerReducer,
  NotifiTypesListServiceReducer: NotifiTypesListService,
  AddNotifiTypesServiceReducer: AddNotifiTypesService,
  EditNotificationType : EditNotificationType
});

export default NotificationTypes;
