import axiosInstance from "util/Api";

export const GroupAdd = async (notification_group_name,notification_group_description,notification_group_type,notification_group_subscriber_allowance_status,allowance_status,notification_type_name) =>  
await  axiosInstance.post('organisation-groups/add', {
    notification_group_name:notification_group_name,
    notification_group_description:notification_group_description,
    notification_group_type:notification_group_type,
    notification_group_subscriber_allowance_status:allowance_status,
    notification_type_name:'',
    ornt_id:notification_type_name||'',
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});