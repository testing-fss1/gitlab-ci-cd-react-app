import {all} from "redux-saga/effects";
import composeHistorySagas from "./ComposeHistorySagas";

export default function* rootSaga() {
  yield all([  	
     	composeHistorySagas(),
  ]);
}
