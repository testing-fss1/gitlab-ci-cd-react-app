import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	EDIT_ORG_EMPLOYEES 
} from "../../../constants/ActionTypes";

import { OrgEmpListService } from "../../actions/OrgEmployees";
import { EditOrgEmployeesService } from '../../api/OrgEmployees';
import {fetchStart, fetchSuccess} from "../../actions";

//   Worker Saga

function* EditOrgEmployeesServiceFunction({values, sm_memb_id, OrgEmpLisState}) {
    const {salutation, firstname, middlename, lastname, organization_name, mobile_country_code, mobile_number, phone_country_code, phone_number, email_id} = values;
    try {
        yield put(fetchStart());
        const EditOrgEmployeesServiceData = yield call(EditOrgEmployeesService, salutation, firstname, middlename, lastname, organization_name, mobile_country_code, mobile_number, phone_country_code, phone_number, email_id, sm_memb_id);
        if (EditOrgEmployeesServiceData && EditOrgEmployeesServiceData.data.status == "user-upated-successfully") {
            yield put(OrgEmpListService(OrgEmpLisState));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* EditOrgEmployeesServiceRootSaga() {
	yield takeEvery(EDIT_ORG_EMPLOYEES, EditOrgEmployeesServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(EditOrgEmployeesServiceRootSaga),
        ]
    );
}
