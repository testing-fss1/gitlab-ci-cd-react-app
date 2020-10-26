import { all } from "redux-saga/effects";
import OrgEmpListService from "./OrgEmpListService";
import AddOrgEmployeesService from "./AddOrgEmployeesService";
import EditOrgEmployeesService from "./EditOrgEmployeesService";
import ChangeEmailRequestAddService from "./ChangeEmailRequestAddService";
import UniqueCodeVerifyService from "./UniqueCodeVerifyService";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        OrgEmpListService(),
        AddOrgEmployeesService(),
        EditOrgEmployeesService(),
        ChangeEmailRequestAddService(),
        UniqueCodeVerifyService(),
    ]);
};

export default rootSaga;
