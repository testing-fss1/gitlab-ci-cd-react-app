import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	ADD_NOTIFI_TYPES 
} from "../../../constants/ActionTypes";

import { AddNotifiTypesServiceSuccess } from "../../actions/NotificationTypes";
import { AddNotifiTypesService } from '../../api/NotificationTypes';

//   Worker Saga

function* AddNotifiTypesServiceFunction({values}) {
    const {notificationtypename, notificationtypedescription, notificationtypecolorcode} = values;
    try {
        const AddNotifiTypesServiceData = yield call(AddNotifiTypesService, notificationtypename, notificationtypedescription, notificationtypecolorcode);
        if (AddNotifiTypesServiceData) {
            yield put(AddNotifiTypesServiceSuccess(AddNotifiTypesServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* AddNotifiTypesServiceRootSaga() {
	yield takeEvery(ADD_NOTIFI_TYPES, AddNotifiTypesServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AddNotifiTypesServiceRootSaga),
        ]
    );
}
