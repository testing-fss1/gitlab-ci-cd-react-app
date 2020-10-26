import { all, call, fork, put, takeEvery, take } from "redux-saga/effects";
import {
    SIGNIN_USER,
    USER_DATA_GET,
    SIGNOUT_USER
} from "../../constants/ActionTypes";
import axios from 'util/Api';
import { userSignInSuccess, userDataGetService, userDataSuccess, signOutUserSuccess, userSignInFailed } from "../../appRedux/actions";
import { signInUserWithEmailPasswordRequest, userDetailsGetRequest, signOutRequest } from '../api';



//   Worker Saga
function* signInUserWithEmailPassword({data}) {
    try {
        const signInUserResponse = yield call(signInUserWithEmailPasswordRequest, data.userIdentifier, data.password);
        if (signInUserResponse) {
            if(signInUserResponse.status==200){
                localStorage.setItem("token", JSON.stringify(signInUserResponse.headers.authorization));
                axios.defaults.headers.common['Authorization'] = signInUserResponse.headers.authorization;
                yield put(userSignInSuccess(signInUserResponse.headers.authorization));
                yield put(userDataGetService());
            }
            else {
                yield put(userSignInFailed(signInUserResponse.data))
            }
        } else {
        }
    } catch (error) {
    }
}

function* basicUserDetailsGet() {
    try {
        const userData = yield call(userDetailsGetRequest);
        
        if (userData) {
            localStorage.setItem("user_data", JSON.stringify(userData.data.data));
            yield put(userDataSuccess(userData.data.data));
        } else {
        }
    } catch (error) {
    }
}

function* signOut({payload}) {
    console.log('logout_request_type IN SIGN OUT SAGAS: ', payload);
    
    try {
        const signOutUser = yield call(signOutRequest, payload);
        if (signOutUser) {
            localStorage.removeItem('user_data');
            localStorage.removeItem('token');
            localStorage.removeItem('user_identifier');
            delete axios.defaults.headers.common["Authorization"]
            yield put(signOutUserSuccess());
            window.location.reload(); 
        }
    } catch (error) {
    }
}


//   Watcher Saga
export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* userDataGet() {
    yield takeEvery(USER_DATA_GET, basicUserDetailsGet);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}


export default function* rootSaga() {
    yield all(
        [
            fork(signInUser),
            fork(userDataGet),
            fork(signOutUser)
        ]
    );
}