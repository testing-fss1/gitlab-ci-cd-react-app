import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	CHANGE_MOBILE_REQUEST_ADD 
} from "../../../../constants/ActionTypes";

import { ChangeMobileRequestAddServiceSuccess } from "../../../actions";
import { ChangeMobileRequestAddService } from '../../../api';

//   Worker Saga

function* ChangeMobileRequestAddServiceFunction({values, sm_memb_id}) {
    const {current_new_mobile_number, enter_new_mobile_number} = values;
    console.log("values",current_new_mobile_number,enter_new_mobile_number )
    try {
        const ChangeMobileRequestAddServiceData = yield call(ChangeMobileRequestAddService, current_new_mobile_number, enter_new_mobile_number, sm_memb_id);
        if (ChangeMobileRequestAddServiceData) {
            yield put(ChangeMobileRequestAddServiceSuccess(ChangeMobileRequestAddServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* ChangeMobileRequestAddServiceRootSaga() {
	yield takeEvery(CHANGE_MOBILE_REQUEST_ADD, ChangeMobileRequestAddServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(ChangeMobileRequestAddServiceRootSaga),
        ]
    );
}
