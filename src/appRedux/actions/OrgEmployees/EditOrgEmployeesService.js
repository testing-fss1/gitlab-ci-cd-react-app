import {
	EDIT_ORG_EMPLOYEES,
	EDIT_ORG_EMPLOYEES_SUCCESS,
} from "../../../constants/ActionTypes";

export const EditOrgEmployeesService = (values, sm_memb_id, OrgEmpLisState) => {
  return {
    type: EDIT_ORG_EMPLOYEES,
    values: values,
    sm_memb_id: sm_memb_id,
    OrgEmpLisState: OrgEmpLisState
  }
};