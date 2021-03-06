import axiosInstance from "util/Api";

export const ComposeSMSApi = async (notification_group_id, notification_group_id_2, notification_type_id, SMS_message, SMS_message_2, checkedValue, finalComparedValueNotifiTypeId) => 
await axiosInstance.post('notification-compose/add', {
	org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
	orng_id: notification_group_id || [notification_group_id_2],
	snm_id: "c0032991-68f0-4f88-9a07-dfe43289c9c5",
	ornt_id: notification_type_id || finalComparedValueNotifiTypeId,
	//notification_type_name: "",
	//notification_group_name: "",
	notification_group_type: checkedValue,
	notification_method: "SMS",
	message: SMS_message || SMS_message_2,
	voice_call_rel_audio_file_name: "",
	//subscriber_sm_memb_id: "",
	ip_address:JSON.parse(localStorage.getItem('ip_address')),
})
.then(data => data)
.catch(error => {
	return error.response;
});