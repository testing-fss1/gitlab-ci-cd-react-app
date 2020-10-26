import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    NOTIFICATION_GET_LIST_REQUEST,
} from "constants/ActionTypes";
import {notificationListSuccess} from "../../actions/NotificationIconAction";
import {notificationApi} from "../../api/NotificationIconApi";


function* AddNotificationMainSaga() {
    console.log("hello sagas")
	
    try {
        const notificationData = yield call(notificationApi );
        console.log("notificationData",notificationData)
	    if (notificationData) {
	      yield put(notificationListSuccess(notificationData.data));
	    }else {
          yield put(notificationListSuccess(notificationData.data));
        }
    } catch (error) {
	}
}

//   Watcher Saga

export function* AddNotificationRootSaga() {
	yield takeEvery(NOTIFICATION_GET_LIST_REQUEST, AddNotificationMainSaga);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AddNotificationRootSaga),
        ]
    );
}
