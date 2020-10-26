import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	CHANGE_PSW 
} from "../../../constants/ActionTypes";

import { changePsw, changePasswordResponce } from "../../actions/Password";
import { changePasswordRequest } from '../../api/Password';

//   Worker Saga

function* changePasswordDetailsGet({data}) {
    const {current_password, new_password, confirm_new_password} = data;
    try {
        const userData = yield call(changePasswordRequest, current_password, new_password, confirm_new_password);
        if (userData.status == 'password-changed-successfully') {
            yield put(changePasswordResponce(userData.data));
        } else {
            yield put(changePasswordResponce(userData.data))
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* changePasswordGet() {
	yield takeEvery(CHANGE_PSW, changePasswordDetailsGet);
}


export default function* rootSaga() {
    yield all(
        [
            fork(changePasswordGet),
        ]
    );
}
