import axiosInstance from '../../../util/Api';

export const changePasswordRequest = async(current_password, new_password, confirm_new_password) => 
	await axiosInstance.post('change-password', {
		user_id: JSON.parse(localStorage.getItem('user_data')).sm_memb_id,
		current_password: current_password || '',
		new_password: new_password || '',
		confirm_new_password: confirm_new_password || '',
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
