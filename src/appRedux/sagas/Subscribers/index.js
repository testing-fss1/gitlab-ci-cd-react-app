import { all } from "redux-saga/effects";
import AddSubscriber from "./AddSubscriberSagas";
import SubscriberList from "./SubscribersListSagas";
import EditSubscriber from "./EditSubscriberSagas"
import GroupsList from './ListGroupsServiceSagas';
import GroupsAdd from './GroupMappedAddServiceSagas';
import SubscriberSingleViewSagas from "./SubscriberSingleViewSagas"; 

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        AddSubscriber(),
        SubscriberList(),
        EditSubscriber(),
        GroupsList(),
        GroupsAdd(),
        SubscriberSingleViewSagas(),
    ]);
};

export default rootSaga;
