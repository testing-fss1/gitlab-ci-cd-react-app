import axiosInstance from '../../../util/Api';

export const UserStatusChange = async(value, sm_memb_id) => 
	await axiosInstance.post('user/change-status', {
		user_id: sm_memb_id,
		new_status: value,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });


   	//import axiosInstance from '../../../util/Api';

export const SubscriberStatus = async(data,orng_id,sm_memb_id) => 
	await axiosInstance.post('group-subscribe-status/change', {
		ia_active_status : data,
		subscriber_id : sm_memb_id,
		orng_id : orng_id,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
