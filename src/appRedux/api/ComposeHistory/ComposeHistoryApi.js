import axiosInstance from '../../../util/Api';

export const ComposeHistoryApi = async (user_id) => 
    await  axiosInstance.post('notifications/history/list', {
    	org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        return data.data;
    })
    .catch(error => {
    });
