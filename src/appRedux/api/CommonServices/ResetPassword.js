import axiosInstance from '../../../util/Api';

export const ResetPasswordApi = async (user_id) => 
    await  axiosInstance.post('reset-password', {
        user_id: user_id,
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        return data.data;
    })
    .catch(error => {
         return error.response;
    });
