import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
	COMPOSE_VOICEMAIL_ACTION,
} from "constants/ActionTypes";
import {ComposeVoiceMailSuccess} from "../../actions/ComposeAction";
import {ComposeVoiceMailApi} from "../../api/ComposeApi";


function* ComposeVoiceMailMainSaga({values, checkedValue, finalComparedValueNotifiTypeId}) {
	const {notification_group_id, notification_group_id_2, notification_type_id, VoiceMail_message, VoiceMail_message_2} = values;
	try {
		const ComposeVoiceMailData = yield call(ComposeVoiceMailApi, notification_group_id, notification_group_id_2, notification_type_id, VoiceMail_message, VoiceMail_message_2, checkedValue, finalComparedValueNotifiTypeId);
		console.log("ComposeVoiceMailData",ComposeVoiceMailData)
		if (ComposeVoiceMailData) {
			yield put(ComposeVoiceMailSuccess(ComposeVoiceMailData.data));
		}else {
			yield put(ComposeVoiceMailSuccess(ComposeVoiceMailData.data));
		}
	} catch (error) {
	}
}

// Watcher Saga

export function* ComposeVoiceMailRootSaga() {
	yield takeEvery(COMPOSE_VOICEMAIL_ACTION, ComposeVoiceMailMainSaga);
}


export default function* rootSaga() {
	yield all(
		[
			fork(ComposeVoiceMailRootSaga),
		]
	);
}
