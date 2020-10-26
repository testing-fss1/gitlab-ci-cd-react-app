import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	ORG_EMP_LIST 
} from "../../../constants/ActionTypes";

import { OrgEmpListServiceSuccess } from "../../actions/OrgEmployees";
import { OrgEmpListService } from '../../api/OrgEmployees';
import {fetchStart, fetchSuccess} from "../../actions";
import {UserStatusChangeSuccess} from "../../actions/CommonServices";

//   Worker Saga

function* OrgEmpListServiceFunction({state}) {
    try {
        yield put(fetchStart());
        const OrgEmployeesServiceData = yield call(OrgEmpListService, state);
        console.log("OrgEmployeesServiceData : ", OrgEmployeesServiceData)
        if (OrgEmployeesServiceData) {
            yield put(OrgEmpListServiceSuccess(OrgEmployeesServiceData.data.data));
            yield put(UserStatusChangeSuccess({}))
        } else {
        }
        yield put(fetchSuccess());
    } catch (error) {
    }
}

//   Watcher Saga

export function* OrgEmpListServiceRootSaga() {
	yield takeEvery(ORG_EMP_LIST, OrgEmpListServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(OrgEmpListServiceRootSaga),
        ]
    );
}
