import axiosInstance from '../../../util/Api';

export const OrgEmpListService = async(state) => 
	await axiosInstance.post('org-employee/list', {
		org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
		page_number: state.page_number,
		number_of_records: state.number_of_records,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
