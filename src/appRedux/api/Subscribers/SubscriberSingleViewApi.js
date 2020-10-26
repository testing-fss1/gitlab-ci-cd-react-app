import axiosInstance from '../../../util/Api';

export const SubscriberSingleViewServiceApi = async(org_id,sm_memb_id,page_number) => 
	await axiosInstance.post('subscriber-specific/groups/list', {
        org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
        sm_memb_id : sm_memb_id || "",
        number_of_records : "50",
        page_number :  page_number || "",
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });


    export const AdminUserDetailsServiceApi = async(org_id,sm_memb_id) => 
	await axiosInstance.post('admin-user-details/get', {
        user_id : sm_memb_id || "",
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        console.log("getting data")
        return data;
    })
   	.catch(error =>{
    });
