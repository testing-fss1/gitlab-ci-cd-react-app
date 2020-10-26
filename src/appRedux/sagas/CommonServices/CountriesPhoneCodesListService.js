import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
	COUNTRIES_PHONECODES_LIST 
} from "../../../constants/ActionTypes";

import { CountriesPhoneCodesListServiceSuccess } from "../../actions/CommonServices";
import { CountriesPhoneCodesListService } from '../../api/CommonServices';

//   Worker Saga

function* CountriesPhoneCodesListServiceFunction() {
    try {
        const CountriesPhoneCodesListServiceData = yield call(CountriesPhoneCodesListService);
        console.log("CountriesPhoneCodesListServiceData : ", CountriesPhoneCodesListServiceData)
        if (CountriesPhoneCodesListServiceData) {
            yield put(CountriesPhoneCodesListServiceSuccess(CountriesPhoneCodesListServiceData.data));
        } else {
        }
    } catch (error) {
    }
}

//   Watcher Saga

export function* CountriesPhoneCodesListServiceRootSaga() {
	yield takeEvery(COUNTRIES_PHONECODES_LIST, CountriesPhoneCodesListServiceFunction);
}


export default function* rootSaga() {
    yield all(
        [
            fork(CountriesPhoneCodesListServiceRootSaga),
        ]
    );
}
