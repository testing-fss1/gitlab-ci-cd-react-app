import axiosInstance from "util/Api";

export const ComposeEMailApi = async (notification_group_id, notification_group_id_2, notification_type_id, EMail_message, EMail_message_2, checkedValue, finalComparedValueNotifiTypeId) => 
await axiosInstance.post('notification-compose/add', {
	org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
	orng_id: notification_group_id || [notification_group_id_2],
	snm_id: "12714753-44c7-437e-8c16-d59a2d2653d1",
	ornt_id: notification_type_id || finalComparedValueNotifiTypeId,
	//notification_type_name: "",
	//notification_group_name: "",
	notification_group_type: checkedValue,
	notification_method: "Email",
	message: EMail_message || EMail_message_2,
	voice_call_rel_audio_file_name: "",
	//subscriber_sm_memb_id: "",
	ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
	return error.response;
});