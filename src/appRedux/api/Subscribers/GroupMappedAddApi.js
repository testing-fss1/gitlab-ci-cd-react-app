import axiosInstance from '../../../util/Api';

export const GroupMappedAddServiceApi = async(groups, sm_memb_id) => 
	await axiosInstance.post('org-rel-notification/group-mapped-subscribers/add', {
        org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        subscriber_sm_memb_id :sm_memb_id,
        groups : groups || [],
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
