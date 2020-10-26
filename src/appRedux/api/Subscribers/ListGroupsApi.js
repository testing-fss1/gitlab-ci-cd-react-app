import axiosInstance from '../../../util/Api';

export const ListGroupsServiceApi = async(number_of_records, page_number, sm_memb_id) => 
	await axiosInstance.post('subscriber-specific/groups/list', {
        org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        number_of_records : number_of_records || "",
        page_number : page_number || "",
        sm_memb_id : sm_memb_id, 
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
