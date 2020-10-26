import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import AddGroup from "./AddGroupReducers";
import GroupsListService from  "./GroupsListsServiceReducers";
import EditGroup from "./EditGroupReducers";
import GroupGetDataService from "./GroupsDataGetServiceReducers";
import RemoveSubscriberfromGroup from './RemoveSubscriberFromGroupReducers';

const GroupsReducer = combineReducers({
  routing: routerReducer,
  AddGroup:AddGroup,
  GroupsListService:GroupsListService,
  EditGroup:EditGroup,
  GroupGetDataService:GroupGetDataService,
  RemoveSubscriberfromGroup:RemoveSubscriberfromGroup,
});

export default GroupsReducer;
