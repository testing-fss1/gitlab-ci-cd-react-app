import { all } from "redux-saga/effects";
import addSiteAdminSaga from "./addSiteAdminSaga";
import editSiteAdminSaga from "./editSiteAdminSaga";
import SiteAdminUsersListSaga from "./SiteAdminUsersListSaga";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        addSiteAdminSaga(),
        editSiteAdminSaga(),
        SiteAdminUsersListSaga(),
    ]);
};

export default rootSaga;
