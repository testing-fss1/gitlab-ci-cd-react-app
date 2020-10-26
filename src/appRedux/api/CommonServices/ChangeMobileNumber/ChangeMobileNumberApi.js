import axiosInstance from '../../../../util/Api';

export const ChangeMobileRequestAddService = async(current_new_mobile_number, enter_new_mobile_number, sm_memb_id) => 
	await axiosInstance.post('sm-user/change-mobile/number/requests-add', {
		sm_memb_id: sm_memb_id,
		current_sm_mobile_number: current_new_mobile_number,
		new_sm_mobile_number : enter_new_mobile_number,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
