import { all } from "redux-saga/effects";
import addOrgAdminSaga from "./addOrgAdminSaga";
import editOrgAdminSaga from "./editOrgAdminSaga";
import OrgAdminDetailsGetSaga from "./OrgAdminDetailsGetSaga";
import OrgAdminUsersListSaga from "./OrgAdminUsersListSaga";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        addOrgAdminSaga(),
        editOrgAdminSaga(),
        OrgAdminDetailsGetSaga(),
        OrgAdminUsersListSaga(),
    ]);
};

export default rootSaga;
