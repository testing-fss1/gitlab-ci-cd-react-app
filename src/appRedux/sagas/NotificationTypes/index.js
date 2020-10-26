import { all } from "redux-saga/effects";
import AddNotifiTypesService from "./AddNotifiTypesService";
import NotifiTypesListService from "./NotifiTypesListService";
import NotifiTypesStatusChange from "./NotifiTypesStatusChange";
import EditNotifiTypesService from "./EditNotifiTypesService";

// Watcher saga --> Actions --> Worker saga 

function* rootSaga() {
    yield all([
        AddNotifiTypesService(),
        NotifiTypesListService(),
        NotifiTypesStatusChange(),
        EditNotifiTypesService(),
    ]);
};

export default rootSaga;
