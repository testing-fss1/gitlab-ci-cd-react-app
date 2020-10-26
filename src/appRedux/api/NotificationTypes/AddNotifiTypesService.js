import axiosInstance from '../../../util/Api';

export const AddNotifiTypesService = async(notificationtypename, notificationtypedescription, notificationtypecolorcode) => 
	await axiosInstance.post('org-rel-notification-types/add', {
		org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
		notification_type_name: notificationtypename,
		notification_type_description: notificationtypedescription,
		notification_type_colour_code: notificationtypecolorcode.hex,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
