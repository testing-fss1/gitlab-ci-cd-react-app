import axiosInstance from '../../../../util/Api';


export const siteAdminDashboardListService = async ( page_number) => 
    await axiosInstance.post('site-members-dashboard-admin-users/list', {
        user_classification: '17dba2bf-13b4-444d-b920-8405789c98c8',
        number_of_records:  '10',
        page_number: page_number || '1',
        ip_address: JSON.parse(localStorage.getItem('ip_address')),
    })
    .then(data => {
        console.log('Users List In Api : ', data);
        return data
    })
    .catch(error => error);


