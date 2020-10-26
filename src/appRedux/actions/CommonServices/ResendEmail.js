import {
  RESEND_EMAIL,
  RESEND_EMAIL_DATA
} from "constants/ActionTypes";

export const ResendEmail = (user_id) => {
  return {
    type: RESEND_EMAIL,
    user_id: user_id
  };
};

export const ResendActivationEmailServiceSuccess = (data) => {
  return {
    type: RESEND_EMAIL_DATA,
    status: data.status,
    statusDescription: data.status_description
  };
};