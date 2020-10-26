import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import UserListPresentational from "./UserListPresentational";
import {OrgAdminUsersList} from "../../../../appRedux/actions/SiteAdmin/OrgAdminUsersList";
import {UserStatusChange, UserStatusChangeSuccess} from "../../../../appRedux/actions/CommonServices";

const UserListContainer = (props) => {
	const {OrgAdminUsersList, orgAdminPayload, UserStatusChange, loadingData,UserStatusChangeServiceStatus, orgAdminPayloadStatusDes, UserStatusChangeSuccess} = props;
	console.log('loadingData : ', loadingData);
	const [state, setState] = useState({
    	page_number: '',
    	number_of_records: '',
    });
	useEffect(()=>{
		OrgAdminUsersList({...state});
	}, [])
	const handleChange = (value, sm_memb_id) => {
		console.log("handleChange:", value, sm_memb_id)
		UserStatusChange(value, sm_memb_id);
	}

	useEffect(()=>{
		if(UserStatusChangeServiceStatus == "user-status-change-successful") {
			OrgAdminUsersList({...state});
			UserStatusChangeSuccess({status:""})
		}
	}, [UserStatusChangeServiceStatus])

	console.log('------listUsers------- : ', orgAdminPayload);
  	return (
    	<UserListPresentational 
		orgAdminPayload={orgAdminPayload}
    		handleChange={handleChange}
			loadingData={loadingData}
			orgAdminPayloadStatusDes ={ orgAdminPayloadStatusDes }
    	/>
  	);
};

const mapStateToProps = ({AddOrgAdmin, commonData, CommonServices}) => {
	console.log("CommonServices:", CommonServices)
	return {
		orgAdminPayload: AddOrgAdmin.OrgAdminUsersListReducer.orgAdminPayload.data,
		loadingData: commonData.loading,
		orgAdminPayloadStatusDes : AddOrgAdmin.OrgAdminUsersListReducer.orgAdminPayloadStatusDes,
		UserStatusChangeServiceStatus: CommonServices && CommonServices.UserStatusChangeReducer && CommonServices.UserStatusChangeReducer.UserStatusChangeServiceStatus,
	}
}

export default connect(mapStateToProps, {OrgAdminUsersList, UserStatusChange, UserStatusChangeSuccess})(UserListContainer);