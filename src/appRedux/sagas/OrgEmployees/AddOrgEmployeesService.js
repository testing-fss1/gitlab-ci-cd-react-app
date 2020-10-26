import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	ADD_ORG_EMPLOYEES 
} from "../../../constants/ActionTypes";

import { AddOrgEmployeesServiceSuccess } from "../../actions/OrgEmployees";
import { AddOrgEmployeesService } from '../../api/OrgEmployees';

//   Worker Saga

function* AddOrgEmployeesServiceFunction({values}) {
    const {salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_country_code, phone_number, email_id} = values;
    try {
        const AddOrgEmployeesServiceData = yield call(AddOrgEmployeesService, salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_country_code, phone_number, email_id);
        if (AddOrgEmployeesServiceData) {
            yield put(AddOrgEmployeesServiceSuccess(AddOrgEmployeesServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* AddOrgEmployeesServiceRootSaga() {
	yield takeEvery(ADD_ORG_EMPLOYEES, AddOrgEmployeesServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AddOrgEmployeesServiceRootSaga),
        ]
    );
}
