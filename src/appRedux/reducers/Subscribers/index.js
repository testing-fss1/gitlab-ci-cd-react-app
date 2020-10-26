import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import AddSubscriber from "./AddSubscriberReducers";
import SubsribersListService from "./SubscribersListServiceReducers";
import EditSubscriber from './EditSubscriberReducers';
import ListGroupsService from "./ListGroupsServiceReducers";
import GroupMappedAddService from './GroupMappedAddServiceReducers';
import SubscriberSingleViewReducer from './SubscriberSingleViewReducer';

const SubscribersReducer = combineReducers({
  routing: routerReducer,
  AddSubscriber:AddSubscriber,
  SubsribersListService:SubsribersListService,
  EditSubscriber:EditSubscriber,
  ListGroupsService : ListGroupsService,
  GroupMappedAddService : GroupMappedAddService,
  SubscriberSingleViewReducer : SubscriberSingleViewReducer
});

export default SubscribersReducer;
