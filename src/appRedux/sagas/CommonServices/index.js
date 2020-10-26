import { all } from "redux-saga/effects";
import CountriesPhoneCodesListService from "./CountriesPhoneCodesListService";
import ResendEmail from "./ResendEmail";
import ResetPassword from "./ResetPassword";
import UserStatusChange from "./UserStatusChange";
import CountryListServiceSaga from "./CountryListServiceSaga";
import SubscribeListSagas from "./SubscribeListSagas";
import AdminUserDetailsSaga from "./AdminUserDetailsSaga";
import ChangeMobileNumber from "./ChangeMobileNumber";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        CountriesPhoneCodesListService(),
        ResendEmail(),
        ResetPassword(),
        UserStatusChange(),
        CountryListServiceSaga(),
        SubscribeListSagas(),
        AdminUserDetailsSaga(),
        ChangeMobileNumber(),
    ]);
};

export default rootSaga;
