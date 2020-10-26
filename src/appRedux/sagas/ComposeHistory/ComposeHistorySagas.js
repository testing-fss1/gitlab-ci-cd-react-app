import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {COMPOSE_HISTORY_LIST_ACTION} from "../../../constants/ActionTypes";
import { ComposeHistorySuccess } from "../../actions/ComposeHistory";
import { ComposeHistoryApi } from '../../api/ComposeHistory';


//   Worker Saga
function* composeHistoryService() {
    try {
       const composeHistoryServiceList = yield call(ComposeHistoryApi);
       console.log("history in sagas ",composeHistoryServiceList);
       if (composeHistoryServiceList) {
            yield put(ComposeHistorySuccess(composeHistoryServiceList));
        } else {
        }
    } 
    catch (error) {
        console.log("in error")
    }
}



//   Watcher Saga
export function* composeHistorySagas() {
    yield takeEvery(COMPOSE_HISTORY_LIST_ACTION
   , composeHistoryService);
}

export default function* rootSaga() {
    yield all(
        [
            fork(composeHistorySagas),
        ]
    );
}
