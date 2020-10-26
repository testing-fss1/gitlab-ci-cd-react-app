import { all } from "redux-saga/effects";
import ChangeMobileNumberSagas from "./ChangeMobileNumberSagas";
import UniqueCodeSagas from "./UniqueCodeSagas";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        ChangeMobileNumberSagas(),
        UniqueCodeSagas()
    ]);
};

export default rootSaga;
