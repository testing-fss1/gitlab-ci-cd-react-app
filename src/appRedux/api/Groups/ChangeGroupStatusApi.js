import axiosInstance from "util/Api";

export const ChangeGroupStatusApi = async (orng_id,is_active_status) =>  
await  axiosInstance.post('organisation-groups/change', {
    is_active_status:is_active_status,
    orng_id:orng_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});
