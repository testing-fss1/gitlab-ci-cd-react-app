import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
	COMPOSE_SMS_ACTION,
} from "constants/ActionTypes";
import {ComposeSMSSuccess} from "../../actions/ComposeAction";
import {ComposeSMSApi} from "../../api/ComposeApi";


function* ComposeSMSMainSaga({values, checkedValue, finalComparedValueNotifiTypeId}) {
	const {notification_group_id, notification_group_id_2, notification_type_id, SMS_message, SMS_message_2} = values;
	try {
		const ComposeSMSData = yield call(ComposeSMSApi, notification_group_id, notification_group_id_2, notification_type_id, SMS_message, SMS_message_2, checkedValue, finalComparedValueNotifiTypeId);
		console.log("ComposeSMSData in sagas",ComposeSMSData.data)
		if (ComposeSMSData) {
			yield put(ComposeSMSSuccess(ComposeSMSData.data));
		}else {
			yield put(ComposeSMSSuccess(ComposeSMSData.data));
		}
	} catch (error) {
	}
}

// Watcher Saga

export function* ComposeSMSRootSaga() {
	yield takeEvery(COMPOSE_SMS_ACTION, ComposeSMSMainSaga);
}


export default function* rootSaga() {
	yield all(
		[
			fork(ComposeSMSRootSaga),
		]
	);
}
