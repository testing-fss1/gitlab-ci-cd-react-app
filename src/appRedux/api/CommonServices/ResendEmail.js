import axiosInstance from '../../../util/Api';

export const ResendActivationEmail = async (user_id) => 
    await  axiosInstance.post('resend-activation-email-insert', {
        user_id: user_id,
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        return data.data;
    })
    .catch(error => {
    });
