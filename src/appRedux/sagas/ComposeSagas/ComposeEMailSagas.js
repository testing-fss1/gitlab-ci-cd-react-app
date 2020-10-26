import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
	COMPOSE_EMAIL_ACTION,
} from "constants/ActionTypes";
import {ComposeEMailSuccess} from "../../actions/ComposeAction";
import {ComposeEMailApi} from "../../api/ComposeApi";


function* ComposeEMailMainSaga({values, checkedValue, finalComparedValueNotifiTypeId}) {
	const {notification_group_id, notification_group_id_2, notification_type_id, EMail_message, EMail_message_2} = values;
	try {
		const ComposeEMailData = yield call(ComposeEMailApi, notification_group_id, notification_group_id_2, notification_type_id, EMail_message, EMail_message_2, checkedValue, finalComparedValueNotifiTypeId);
		console.log("ComposeEMailData",ComposeEMailData)
		if (ComposeEMailData) {
			yield put(ComposeEMailSuccess(ComposeEMailData.data));
		}else {
			yield put(ComposeEMailSuccess(ComposeEMailData.data));
		}
	} catch (error) {
	}
}

// Watcher Saga

export function* ComposeEMailRootSaga() {
	yield takeEvery(COMPOSE_EMAIL_ACTION, ComposeEMailMainSaga);
}


export default function* rootSaga() {
	yield all(
		[
			fork(ComposeEMailRootSaga),
		]
	);
}
