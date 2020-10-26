import axiosInstance from "util/Api";

export const SubscriberEdit = async (salutation, firstname, middlename, lastname, mobile_country_code, mobile_number, phone_number,
    phone_country_code, email_id,address_ref_name,address_line1,address_line2,address_area,address_city,address_state,address_country,address_zipcode_pincode,orsa_id,org_id,sm_memb_id) =>  
    await  axiosInstance.post('subscribers/edit', {
    sm_memb_id: sm_memb_id,
    salutation: salutation || null,
    firstname: firstname,
    middlename: middlename || null,
    lastname: lastname || "",
    mobile_country_code: mobile_country_code || "",
    mobile_number: mobile_number || "",
    phone_number: phone_number || null,
    phone_country_code: phone_country_code || null,
    email_id: email_id || "",
    address_ref_name:address_ref_name || "",
    address_line1:address_line1 || "",
    address_line2:address_line2 || "",
    address_area:'',
    address_city:address_city || "",
    address_state:address_state || "" ,
    address_country:address_country || "",
    address_zipcode_pincode:address_zipcode_pincode || "",
    orsa_id:orsa_id||'111',
    org_id: JSON.parse(localStorage.getItem('user_data')).org_id,
    ip_address: JSON.parse(localStorage.getItem('ip_address'))
})
.then(data => data)
.catch(error => {
    return error.response;
});