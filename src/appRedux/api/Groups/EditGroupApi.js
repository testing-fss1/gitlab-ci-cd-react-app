import axiosInstance from "util/Api";

export const GroupEdit = async (notification_group_name,notification_group_description,notification_group_type,notification_type_name,notification_group_subscriber_allowance_status,orng_id,allowance_status) =>  
await  axiosInstance.post('organisation-groups/edit', {
    orng_id:orng_id,
    notification_group_description:notification_group_description||'',
    notification_group_name:notification_group_name,
    notification_group_type:notification_group_type||'',
    notification_group_subscriber_allowance_status:allowance_status,
    ornt_id:'755b54ff-5ec7-4196-9732-567865e9609c',
    notification_type_name:notification_type_name||'No',
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});