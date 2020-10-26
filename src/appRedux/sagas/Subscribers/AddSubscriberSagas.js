import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    ADD_SUBSCRIBER,
} from "constants/ActionTypes";
import {addSubscriberSucess} from "../../actions/Subscribers";
import {SubscriberAdd} from "../../api/Subscribers";


function* AddSubscriberService({data}) {
	console.log('sagas',data)
    const {salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number,
        phone_country_code, email_id,address_ref_name,address_line1,address_line2,address_area,address_city,address_state,address_country,address_zipcode_pincode,orng_id}= data;
    try {
        const SubscriberAddData = yield call(SubscriberAdd,salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number,
            phone_country_code, email_id,address_ref_name,address_line1,address_line2,address_area,address_city,address_state,address_country,address_zipcode_pincode,orng_id
        );
        console.log("Add subscriber",SubscriberAddData)
	    if (SubscriberAddData.status== "user-insert-successful") {
	      yield put(addSubscriberSucess(SubscriberAddData.data));
	    }else {
          yield put(addSubscriberSucess(SubscriberAddData.data));
        }
    } catch (error) {
	}
}

//   Watcher Saga

export function* AddSubscriberRootSaga() {
	yield takeEvery(ADD_SUBSCRIBER, AddSubscriberService);
}


export default function* rootSaga() {
    yield all(
        [
            fork(AddSubscriberRootSaga),
        ]
    );
}
