import axiosInstance from '../../../util/Api';

export const EditNotifiTypesService = async(notificationtypename, notificationtypedescription, notificationtypecolorcode, ornt_id) => 
	await axiosInstance.post('org-rel-notification-types/edit', {
		org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
		ornt_id: ornt_id,
		notification_type_name: notificationtypename,
		notification_type_description: notificationtypedescription,
		notification_type_colour_code: notificationtypecolorcode.hex ? notificationtypecolorcode.hex : notificationtypecolorcode,
		ip_address: JSON.parse(localStorage.getItem('ip_address'))
	})
	.then(data => {
        return data;
    })
   	.catch(error =>{
    });
