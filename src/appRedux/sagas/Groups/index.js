import { all } from "redux-saga/effects";
import AddGroup from "./AddGroupSagas";
import GroupsListService from "./GroupsListServiceSagas";
import EditGroup from "./EditGroupSagas";
import ChangeGroupStatus from "./GroupStatusChangeSagas";
import GroupGetData from "./GroupDataGetServiceSagas";
import RemoveSubscriberFromGroup from "./RemoveSubscriberFromGroupSagas";
// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        AddGroup(),
        GroupsListService(),
        EditGroup(),
        ChangeGroupStatus(),
        GroupGetData(),
        RemoveSubscriberFromGroup()
    ]);
};

export default rootSaga;
