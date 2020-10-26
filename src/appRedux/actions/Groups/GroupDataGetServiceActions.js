import {
  GROUP_DATA_GET_SERVICE,
  GROUP_DATA_GET_SERVICE_SUCCESS
} from "../../../constants/ActionTypes";

export const GroupDataGetService = (orng_id) => {
  console.log('GroupDataGetService',orng_id)
  return {
    type: GROUP_DATA_GET_SERVICE,
    orng_id:orng_id
  }
};


export const GroupDataGetServiceSucess = (data) => {
  return {
    type: GROUP_DATA_GET_SERVICE_SUCCESS,
    data : data,
    dataStatus : data.status,
    dataStatusDiscription : data.status_description
  }
};