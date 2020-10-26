import { all } from "redux-saga/effects";
import Notification from "./Notification"
// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
       
        Notification()

    ]);
};

export default rootSaga;
