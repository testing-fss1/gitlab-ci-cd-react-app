import {
  ADD_ORG_EMPLOYEES_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  AddOrgEmpServiceDataStatus: "",
  AddOrgEmpServiceDataStatusDes: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ADD_ORG_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        AddOrgEmpServiceDataStatus: action.dataStatus,
        AddOrgEmpServiceDataStatusDes: action.dataStatusDiscription
      };
    }

    default:
      return state;
  }
}