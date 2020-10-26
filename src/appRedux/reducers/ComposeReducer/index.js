import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import ComposeSMSReducer from "./ComposeSMSReducer";
import ComposeEMAILReducer from "./ComposeEMAILReducer";
import ComposeVoiceMailReducer from "./ComposeVoiceMailReducer";

const ComposeReducer = combineReducers({
  routing: routerReducer,
  ComposeSMSReducer : ComposeSMSReducer,
  ComposeEMAILReducer : ComposeEMAILReducer,
  ComposeVoiceMailReducer : ComposeVoiceMailReducer,
});

export default ComposeReducer;
