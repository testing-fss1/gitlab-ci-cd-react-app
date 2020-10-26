import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {RESEND_EMAIL} from "constants/ActionTypes";
import axiosInstance from "util/Api";
import {ResendActivationEmailServiceSuccess} from "./../../actions/CommonServices";
import {ResendActivationEmail} from "./../../api/CommonServices";

function* ResendEmailService({user_id}) {
	try {
    const ResendActivationEmailData = yield call(ResendActivationEmail, user_id);
    if (ResendActivationEmailData) {
      yield put(ResendActivationEmailServiceSuccess(ResendActivationEmailData));
    } else {
    }
  } catch (error) {
	}
}

export function* ResendEmailServiceRootSaga() {
  yield takeEvery(RESEND_EMAIL, ResendEmailService);
}

export default function* rootSaga() {
	yield all([
		fork(ResendEmailServiceRootSaga)
	]);
}