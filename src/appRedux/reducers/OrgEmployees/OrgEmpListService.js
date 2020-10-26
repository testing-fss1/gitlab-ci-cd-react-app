import {
  ORG_EMP_LIST_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  OrgEmpListServiceDataList: [],
  OrgEmpListServiceDataStatus: "",
  OrgEmpListServiceDataStatusDes: "",
  OrgEmpListServiceDataList_total_count:""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ORG_EMP_LIST_SUCCESS: {
      return {
        ...state,
        OrgEmpListServiceDataList: action.data,
        OrgEmpListServiceDataStatus: action.dataStatus,
        OrgEmpListServiceDataStatusDes: action.dataStatusDiscription,
       OrgEmpListServiceDataList_total_count : action.total_count
      };
    }

    default:
      return state;
  }
}