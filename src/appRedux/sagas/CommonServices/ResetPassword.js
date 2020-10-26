import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {RESET_PASSWORD} from "constants/ActionTypes";
import axiosInstance from "util/Api";
import {ResetPasswordServiceSuccess} from "./../../actions/CommonServices";
import {ResetPasswordApi} from "./../../api/CommonServices";

function* ResetPasswordService({user_id}) {
	try {
    const ResetPasswordApiData = yield call(ResetPasswordApi, user_id);
    if (ResetPasswordApiData) {
      yield put(ResetPasswordServiceSuccess(ResetPasswordApiData));
    } else {
    }
  } catch (error) {
	}
}

export function* ResetPasswordServiceRootSaga() {
  yield takeEvery(RESET_PASSWORD, ResetPasswordService);
}

export default function* rootSaga() {
	yield all([
		fork(ResetPasswordServiceRootSaga)
	]);
}