import { all } from "redux-saga/effects";
import ComposeSMSSagas from "./ComposeSMSSagas";
import ComposeEMailSagas from "./ComposeEMailSagas";
import ComposeVoiceMailSagas from "./ComposeVoiceMailSagas";

function* rootSaga() {
	yield all([
		ComposeSMSSagas(),
		ComposeEMailSagas(),
		ComposeVoiceMailSagas()
	]);
};

export default rootSaga;