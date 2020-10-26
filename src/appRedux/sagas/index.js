import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import Password from "./Password";
import Subscribers from "./Subscribers";
import NotificationTypes from "./NotificationTypes";
import OrgEmployees from "./OrgEmployees";
import SuperAdmin from "./SuperAdmin";
import Groups from "./Groups";
import CommonServices from "./CommonServices";
import Dashboards from "./Dashboards";
import SiteAdmin from "./SiteAdmin";
import NotificationIconSagas from "./NotificationIconSagas";
import ComposeSagas from './ComposeSagas';
import composeHistorySagas from "./ComposeHistory";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        authSagas(),
        Password(),
        Subscribers(),
        NotificationTypes(),
        OrgEmployees(),
        SuperAdmin(),
        Groups(),
        CommonServices(),
        Dashboards(),
        SiteAdmin(),
        NotificationIconSagas(),
        ComposeSagas(),
        composeHistorySagas()
    ]);
};

export default rootSaga;
