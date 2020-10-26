import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    SUBSCRIBE_LIST_DATA,
    SUBSCRIBE_LIST_UPDATE_DATA
} from "constants/ActionTypes";
import {SubscribeListApiCall, SubscribeListUpdateApiCall} from "../../api/CommonServices/SubscribeListApi";
import {SubscribeListServiceSuccess, SubscribeListUpdateServiceSuccess} from "../../actions/CommonServices/SubscribeListActions";
import { fetchStart, fetchSuccess } from '../../actions/Common';


function* SubscribeListService({data,page_number,number_of_records,status}) {
    console.log('data',data)
    try {
        yield put(fetchStart());
        const SubscribeListData = yield call(SubscribeListApiCall,data,page_number,number_of_records,status);
        console.log("SubscribeListData", SubscribeListData.data)
        yield put(SubscribeListServiceSuccess(SubscribeListData.data));
        yield put(fetchSuccess()); 
    } catch (error) {
	}
}

function* SubscribeListUpdateService({data}) {
    console.log('data in SubscribeListUpdateService: ', data);
    
    const {checkedItems, subscribeId} = data;
    try {
        const SubscribeUpdateListData = yield call(SubscribeListUpdateApiCall, checkedItems, subscribeId);
        console.log("SubscribeUpdateListData", SubscribeUpdateListData)
        yield put(SubscribeListUpdateServiceSuccess(SubscribeUpdateListData.data));
    } catch (error) {
	}
}


//   Watcher Saga

export function* SubscribeListRootSaga() {
	yield takeEvery(SUBSCRIBE_LIST_DATA, SubscribeListService);
}
export function* SubscribeListUpdateRootSaga() {
	yield takeEvery(SUBSCRIBE_LIST_UPDATE_DATA, SubscribeListUpdateService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(SubscribeListRootSaga),
            fork(SubscribeListUpdateRootSaga)
        ]
    );
}
