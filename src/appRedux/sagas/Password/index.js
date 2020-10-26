import { all } from "redux-saga/effects";
import changePassword from "./changePassword";
import activationStatusCheck from './activationCodeStatusCheckSagas';

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        changePassword(),
        activationStatusCheck()
    ]);
};

export default rootSaga;
