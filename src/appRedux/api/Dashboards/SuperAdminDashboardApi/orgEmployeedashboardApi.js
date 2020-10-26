import axiosInstance from '../../../../util/Api';


export const orgEmployeeDashboardListService = async (page_number) => 
    await axiosInstance.post('site-members-dashboard-admin-users/list', {
        number_of_records:  "10",
        page_number:  page_number || '1',
        user_classification: '5c1d9533-26c3-49a8-be8f-43940b0b6100',
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        console.log("gggiioooo",data);
        return data
    })
    .catch(error => error);


