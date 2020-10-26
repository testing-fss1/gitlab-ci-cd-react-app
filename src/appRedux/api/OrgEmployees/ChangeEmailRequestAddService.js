import axiosInstance from '../../../util/Api';

export const ChangeEmailRequestAddService = async(current_email_id, new_email_id, sm_memb_id) => 
	await axiosInstance.post('change-email-request/add', {
		sm_memb_id: sm_memb_id,
		current_sm_email: current_email_id,
		new_sm_email: new_email_id,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
