import axiosInstance from "util/Api";

export const GroupDataGetServiceApi = async (orng_id) =>  
await  axiosInstance.post('organisation-groups/get', {
    orng_id:orng_id,
    ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
    return error.response;
});