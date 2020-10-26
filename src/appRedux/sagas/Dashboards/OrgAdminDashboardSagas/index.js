import { all } from "redux-saga/effects";
import orgEmployeeDashboardSagas from "./orgEmployeeDashboardSagas";
import subscriberDashboardSagas from "./subscriberDashboardSagas";
import groupDashboardSagas from "./groupDashboardSagas";
import notificationDashboardSagas from "./notificationDashboardSagas";




export default function* OrgAdmin() {
    yield all([
        orgEmployeeDashboardSagas(),
        subscriberDashboardSagas(),
        groupDashboardSagas(),
        notificationDashboardSagas(),
    ]);
};

