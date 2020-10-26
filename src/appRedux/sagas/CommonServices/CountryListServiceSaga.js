import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	COUNTRY_LIST 
} from "../../../constants/ActionTypes";

import { CountryListServiceSuccess } from "../../actions/CommonServices/CountryListService";
import { CountryListServiceRequest } from '../../api/CommonServices/CountryListServiceApi';

//   Worker Saga

function* CountryListServiceData() {
    try {
        const CountryListServiceGetData = yield call(CountryListServiceRequest);
        console.log("CountryListServiceGetData : ", CountryListServiceGetData)
        if (CountryListServiceGetData) {
            yield put(CountryListServiceSuccess(CountryListServiceGetData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* CountryListServiceRootSaga() {
	yield takeEvery(COUNTRY_LIST, CountryListServiceData);
}


export default function* rootSaga() {
    yield all(
        [
            fork(CountryListServiceRootSaga),
        ]
    );
}
