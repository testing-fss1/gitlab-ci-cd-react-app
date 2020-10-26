import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	ACTIVATION_STATUS_CHECK, ACTIVATION_STATUS_SUCCESS, REGISTER_PSW, REGISTER_PSW_SUCCESS
} from "../../../constants/ActionTypes";
import { activationStatusCheck, activationStatusSuccess, registerPsw, registerPswSuccess } from "../../actions/Password/activationStatusCheck";
import { fetchStart, fetchSuccess } from '../../actions/Common';
import {activationStatusCodeRequest, registerPswDetailsRequest} from '../../api/Password/activationStatusCheck';

//   Worker Saga

function* activationStatusDetailsGet(data) {
    const { dataCode } = data
    try {
        yield put(fetchStart());
        const activationStatusCodedata = yield call(activationStatusCodeRequest, dataCode);
        if (activationStatusCodedata) {
            yield put(activationStatusSuccess(activationStatusCodedata.data));
        } 
        else {
        }
        yield put(fetchSuccess()); 
    }
    catch (error) {
    }
}

function* registerPswDetailsGet(data) {
    const {data:{activationCode, data:{password, password_confirmation}}} = data
    try {
        const registerPswDetailsGetData = yield call(registerPswDetailsRequest, activationCode, password, password_confirmation);
        if (registerPswDetailsGetData) {
            yield put(registerPswSuccess(registerPswDetailsGetData.data));
        } 
        else {
        }
    }
    catch (error) {
    }
}

//   Watcher Saga

export function* activationStatusCheckGet() {
	yield takeEvery(ACTIVATION_STATUS_CHECK, activationStatusDetailsGet);
}

export function* registerPswGet() {
    yield takeEvery(REGISTER_PSW, registerPswDetailsGet);
}

export default function* rootSaga() {
    yield all(
        [
            fork(activationStatusCheckGet),
            fork(registerPswGet),
        ]
    );
}