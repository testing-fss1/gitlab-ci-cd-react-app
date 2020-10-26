import { all } from "redux-saga/effects";
import OrgAdminDashboardSagas from "./orgAdmindashboardSaga";
import OrgEmployeeDashboardSagas from "./orgEmployeedashboardSaga";
import SiteAdmindashboardSagas from "./siteAdmindashboardSaga"


export default function* OrgAdmin() {
    yield all([
        OrgAdminDashboardSagas(),
        OrgEmployeeDashboardSagas(),
        SiteAdmindashboardSagas(),
    ]);
};

