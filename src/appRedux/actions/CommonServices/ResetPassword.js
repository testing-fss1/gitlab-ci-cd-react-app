import {
  RESET_PASSWORD,
  RESET_PASSWORD_DATA
} from "constants/ActionTypes";

export const ResetPassword = (user_id) => {
  return {
    type: RESET_PASSWORD,
    user_id: user_id
  };
};

export const ResetPasswordServiceSuccess = (data) => {
  return {
    type: RESET_PASSWORD_DATA,
    status: data.status,
    statusDescription: data.status_description
  };
};